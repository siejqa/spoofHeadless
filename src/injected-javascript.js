var scriptCode = '(' + function () {
    // get random element from input list
    function get_random_item(list) {
        return list[Math.floor((Math.random() * list.length))];
    }
    function get_random_items(list, n) {
        var result = new Array(n),
            len = list.length,
            taken = new Array(len);
        if (n > len)
            n = len
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = list[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    // ensure langauge is set
    Object.defineProperty(navigator, 'languages', {
        get: function () {
            var availableLanguages = Array('en', 'pl', 'cs', 'ru', 'fr', 'fr-fr', 'lb', 'no')
            return ['en-US', get_random_item(availableLanguages)];
        },
    });
    //  fake webdriver property (headless has it as true)
    Object.defineProperty(navigator, 'webdriver', {
        get: () => false,
    });

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WebGlRenderingContext
    var functions = [
        'viewport',
        'vertexAttribPointer',
        'vertexAttrib4fv',
        'vertexAttrib4f',
        'vertexAttrib3fv',
        'vertexAttrib3f',
        'vertexAttrib2fv',
        'vertexAttrib2f',
        'vertexAttrib1fv',
        'vertexAttrib1f',
        'validateProgram',
        'useProgram',
        'uniformMatrix4fv',
        'uniformMatrix3fv',
        'uniformMatrix2fv',
        'uniform4iv',
        'uniform4i',
        'uniform4fv',
        'uniform4f',
        'uniform3iv',
        'uniform3i',
        'uniform3fv',
        'uniform3f',
        'uniform2iv',
        'uniform2i',
        'uniform2fv',
        'uniform2f',
        'uniform1iv',
        'uniform1i',
        'uniform1fv',
        'uniform1f',
        'texSubImage2D',
        'texParameteri',
        'texParameterf',
        'texImage2D',
        'stencilOpSeparate',
        'stencilOp',
        'stencilMaskSeparate',
        'stencilMask',
        'stencilFuncSeparate',
        'stencilFunc',
        'shaderSource',
        'scissor',
        'sampleCoverage',
        'renderbufferStorage',
        'readPixels',
        'polygonOffset',
        'pixelStorei',
        'linkProgram',
        'lineWidth',
        'isTexture',
        'isShader',
        'isRenderbuffer',
        'isProgram',
        'isFramebuffer',
        'isEnabled',
        'isContextLost',
        'isBuffer',
        'hint',
        'getVertexAttribOffset',
        'getVertexAttrib',
        'getUniformLocation',
        'getUniform',
        'getTexParameter',
        'getSupportedExtensions',
        'getShaderSource',
        'getShaderPrecisionFormat',
        'getShaderParameter',
        'getShaderInfoLog',
        'getRenderbufferParameter',
        'getProgramParameter',
        'getProgramInfoLog',
        'getParameter',
        'getFramebufferAttachmentParameter',
        'getExtension',
        'getError',
        'getContextAttributes',
        'getBufferParameter',
        'getAttribLocation',
        'getAttachedShaders',
        'getActiveUniform',
        'getActiveAttrib',
        'generateMipmap',
        'frontFace',
        'framebufferTexture2D',
        'framebufferRenderbuffer',
        'flush',
        'finish',
        'enableVertexAttribArray',
        'enable',
        'drawElements',
        'drawArrays',
        'disableVertexAttribArray',
        'disable',
        'detachShader',
        'depthRange',
        'depthMask',
        'depthFunc',
        'deleteTexture',
        'deleteShader',
        'deleteRenderbuffer',
        'deleteProgram',
        'deleteFramebuffer',
        'deleteBuffer',
        'cullFace',
        'createTexture',
        'createShader',
        'createRenderbuffer',
        'createProgram',
        'createFramebuffer',
        'createBuffer',
        'copyTexSubImage2D',
        'copyTexImage2D',
        'compressedTexSubImage2D',
        'compressedTexImage2D',
        'compileShader',
        'colorMask',
        'clearStencil',
        'clearDepth',
        'clearColor',
        'clear',
        'checkFramebufferStatus',
        'bufferSubData',
        'bufferData',
        'blendFuncSeparate',
        'blendFunc',
        'blendEquationSeparate',
        'blendEquation',
        'blendColor',
        'bindTexture',
        'bindRenderbuffer',
        'bindFramebuffer',
        'bindBuffer',
        'bindAttribLocation',
        'attachShader',
        'activeTexture'
    ];

    var enumerates = {
        'ZERO': 0,
        'VIEWPORT': 2978,
        'VERTEX_SHADER': 35633,
        'VERTEX_ATTRIB_ARRAY_TYPE': 34341,
        'VERTEX_ATTRIB_ARRAY_STRIDE': 34340,
        'VERTEX_ATTRIB_ARRAY_SIZE': 34339,
        'VERTEX_ATTRIB_ARRAY_POINTER': 34373,
        'VERTEX_ATTRIB_ARRAY_NORMALIZED': 34922,
        'VERTEX_ATTRIB_ARRAY_ENABLED': 34338,
        'VERTEX_ATTRIB_ARRAY_BUFFER_BINDING': 34975,
        'VERSION': 7938,
        'VENDOR': 7936,
        'VALIDATE_STATUS': 35715,
        'UNSIGNED_SHORT': 5123,
        'UNSIGNED_SHORT_5_6_5': 33635,
        'UNSIGNED_SHORT_5_5_5_1': 32820,
        'UNSIGNED_SHORT_4_4_4_4': 32819,
        'UNSIGNED_INT': 5125,
        'UNSIGNED_BYTE': 5121,
        'UNPACK_PREMULTIPLY_ALPHA_WEBGL': 37441,
        'UNPACK_FLIP_Y_WEBGL': 37440,
        'UNPACK_COLORSPACE_CONVERSION_WEBGL': 37443,
        'UNPACK_ALIGNMENT': 3317,
        'UNMASKED_VENDOR_WEBGL': 37445,
        'UNMASKED_RENDERER_WEBGL': 37446,
        'TRIANGLES': 4,
        'TRIANGLE_STRIP': 5,
        'TRIANGLE_FAN': 6,
        'TEXTURE9': 33993,
        'TEXTURE8': 33992,
        'TEXTURE7': 33991,
        'TEXTURE6': 33990,
        'TEXTURE5': 33989,
        'TEXTURE4': 33988,
        'TEXTURE31': 34015,
        'TEXTURE30': 34014,
        'TEXTURE3': 33987,
        'TEXTURE29': 34013,
        'TEXTURE28': 34012,
        'TEXTURE27': 34011,
        'TEXTURE26': 34010,
        'TEXTURE25': 34009,
        'TEXTURE24': 34008,
        'TEXTURE23': 34007,
        'TEXTURE22': 34006,
        'TEXTURE21': 34005,
        'TEXTURE20': 34004,
        'TEXTURE2': 33986,
        'TEXTURE19': 34003,
        'TEXTURE18': 34002,
        'TEXTURE17': 34001,
        'TEXTURE16': 34000,
        'TEXTURE15': 33999,
        'TEXTURE14': 33998,
        'TEXTURE13': 33997,
        'TEXTURE12': 33996,
        'TEXTURE11': 33995,
        'TEXTURE10': 33994,
        'TEXTURE1': 33985,
        'TEXTURE0': 33984,
        'TEXTURE': 5890,
        'TEXTURE_WRAP_T': 10243,
        'TEXTURE_WRAP_S': 10242,
        'TEXTURE_MIN_FILTER': 10241,
        'TEXTURE_MAG_FILTER': 10240,
        'TEXTURE_CUBE_MAP': 34067,
        'TEXTURE_CUBE_MAP_POSITIVE_Z': 34073,
        'TEXTURE_CUBE_MAP_POSITIVE_Y': 34071,
        'TEXTURE_CUBE_MAP_POSITIVE_X': 34069,
        'TEXTURE_CUBE_MAP_NEGATIVE_Z': 34074,
        'TEXTURE_CUBE_MAP_NEGATIVE_Y': 34072,
        'TEXTURE_CUBE_MAP_NEGATIVE_X': 34070,
        'TEXTURE_BINDING_CUBE_MAP': 34068,
        'TEXTURE_BINDING_2D': 32873,
        'TEXTURE_2D': 3553,
        'SUBPIXEL_BITS': 3408,
        'STREAM_DRAW': 35040,
        'STENCIL_WRITEMASK': 2968,
        'STENCIL_VALUE_MASK': 2963,
        'STENCIL_TEST': 2960,
        'STENCIL_REF': 2967,
        'STENCIL_PASS_DEPTH_PASS': 2966,
        'STENCIL_PASS_DEPTH_FAIL': 2965,
        'STENCIL_INDEX8': 36168,
        'STENCIL_INDEX': 6401,
        'STENCIL_FUNC': 2962,
        'STENCIL_FAIL': 2964,
        'STENCIL_CLEAR_VALUE': 2961,
        'STENCIL_BUFFER_BIT': 1024,
        'STENCIL_BITS': 3415,
        'STENCIL_BACK_WRITEMASK': 36005,
        'STENCIL_BACK_VALUE_MASK': 36004,
        'STENCIL_BACK_REF': 36003,
        'STENCIL_BACK_PASS_DEPTH_PASS': 34819,
        'STENCIL_BACK_PASS_DEPTH_FAIL': 34818,
        'STENCIL_BACK_FUNC': 34816,
        'STENCIL_BACK_FAIL': 34817,
        'STENCIL_ATTACHMENT': 36128,
        'STATIC_DRAW': 35044,
        'SRC_COLOR': 768,
        'SRC_ALPHA': 770,
        'SRC_ALPHA_SATURATE': 776,
        'SHORT': 5122,
        'SHADING_LANGUAGE_VERSION': 35724,
        'SHADER_TYPE': 35663,
        'SCISSOR_TEST': 3089,
        'SCISSOR_BOX': 3088,
        'SAMPLES': 32937,
        'SAMPLER_CUBE': 35680,
        'SAMPLER_2D': 35678,
        'SAMPLE_COVERAGE': 32928,
        'SAMPLE_COVERAGE_VALUE': 32938,
        'SAMPLE_COVERAGE_INVERT': 32939,
        'SAMPLE_BUFFERS': 32936,
        'SAMPLE_ALPHA_TO_COVERAGE': 32926,
        'RGBA4': 32854,
        'RGBA': 6408,
        'RGB565': 36194,
        'RGB5_A1': 32855,
        'RGB': 6407,
        'REPLACE': 7681,
        'REPEAT': 10497,
        'RENDERER': 7937,
        'RENDERBUFFER': 36161,
        'RENDERBUFFER_WIDTH': 36162,
        'RENDERBUFFER_STENCIL_SIZE': 36181,
        'RENDERBUFFER_RED_SIZE': 36176,
        'RENDERBUFFER_INTERNAL_FORMAT': 36164,
        'RENDERBUFFER_HEIGHT': 36163,
        'RENDERBUFFER_GREEN_SIZE': 36177,
        'RENDERBUFFER_DEPTH_SIZE': 36180,
        'RENDERBUFFER_BLUE_SIZE': 36178,
        'RENDERBUFFER_BINDING': 36007,
        'RENDERBUFFER_ALPHA_SIZE': 36179,
        'RED_BITS': 3410,
        'POLYGON_OFFSET_UNITS': 10752,
        'POLYGON_OFFSET_FILL': 32823,
        'POLYGON_OFFSET_FACTOR': 32824,
        'POINTS': 0,
        'PACK_ALIGNMENT': 3333,
        'OUT_OF_MEMORY': 1285,
        'ONE': 1,
        'ONE_MINUS_SRC_COLOR': 769,
        'ONE_MINUS_SRC_ALPHA': 771,
        'ONE_MINUS_DST_COLOR': 775,
        'ONE_MINUS_DST_ALPHA': 773,
        'ONE_MINUS_CONSTANT_COLOR': 32770,
        'ONE_MINUS_CONSTANT_ALPHA': 32772,
        'NOTEQUAL': 517,
        'NONE': 0,
        'NO_ERROR': 0,
        'NICEST': 4354,
        'NEVER': 512,
        'NEAREST': 9728,
        'NEAREST_MIPMAP_NEAREST': 9984,
        'NEAREST_MIPMAP_LINEAR': 9986,
        'MIRRORED_REPEAT': 33648,
        'MEDIUM_INT': 36340,
        'MEDIUM_FLOAT': 36337,
        'MAX_VIEWPORT_DIMS': 3386,
        'MAX_VERTEX_UNIFORM_VECTORS': 36347,
        'MAX_VERTEX_TEXTURE_IMAGE_UNITS': 35660,
        'MAX_VERTEX_ATTRIBS': 34921,
        'MAX_VARYING_VECTORS': 36348,
        'MAX_TEXTURE_SIZE': 3379,
        'MAX_TEXTURE_IMAGE_UNITS': 34930,
        'MAX_RENDERBUFFER_SIZE': 34024,
        'MAX_FRAGMENT_UNIFORM_VECTORS': 36349,
        'MAX_CUBE_MAP_TEXTURE_SIZE': 34076,
        'MAX_COMBINED_TEXTURE_IMAGE_UNITS': 35661,
        'LUMINANCE': 6409,
        'LUMINANCE_ALPHA': 6410,
        'LOW_INT': 36339,
        'LOW_FLOAT': 36336,
        'LINK_STATUS': 35714,
        'LINES': 1,
        'LINEAR': 9729,
        'LINEAR_MIPMAP_NEAREST': 9985,
        'LINEAR_MIPMAP_LINEAR': 9987,
        'LINE_WIDTH': 2849,
        'LINE_STRIP': 3,
        'LINE_LOOP': 2,
        'LESS': 513,
        'LEQUAL': 515,
        'KEEP': 7680,
        'INVERT': 5386,
        'INVALID_VALUE': 1281,
        'INVALID_OPERATION': 1282,
        'INVALID_FRAMEBUFFER_OPERATION': 1286,
        'INVALID_ENUM': 1280,
        'INT': 5124,
        'INT_VEC4': 35669,
        'INT_VEC3': 35668,
        'INT_VEC2': 35667,
        'INCR': 7682,
        'INCR_WRAP': 34055,
        'IMPLEMENTATION_COLOR_READ_TYPE': 35738,
        'IMPLEMENTATION_COLOR_READ_FORMAT': 35739,
        'HIGH_INT': 36341,
        'HIGH_FLOAT': 36338,
        'GREEN_BITS': 3411,
        'GREATER': 516,
        'GEQUAL': 518,
        'GENERATE_MIPMAP_HINT': 33170,
        'FUNC_SUBTRACT': 32778,
        'FUNC_REVERSE_SUBTRACT': 32779,
        'FUNC_ADD': 32774,
        'FRONT': 1028,
        'FRONT_FACE': 2886,
        'FRONT_AND_BACK': 1032,
        'FRAMEBUFFER': 36160,
        'FRAMEBUFFER_UNSUPPORTED': 36061,
        'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT': 36055,
        'FRAMEBUFFER_INCOMPLETE_DIMENSIONS': 36057,
        'FRAMEBUFFER_INCOMPLETE_ATTACHMENT': 36054,
        'FRAMEBUFFER_COMPLETE': 36053,
        'FRAMEBUFFER_BINDING': 36006,
        'FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL': 36050,
        'FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE': 36051,
        'FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE': 36048,
        'FRAMEBUFFER_ATTACHMENT_OBJECT_NAME': 36049,
        'FRAGMENT_SHADER': 35632,
        'FLOAT': 5126,
        'FLOAT_VEC4': 35666,
        'FLOAT_VEC3': 35665,
        'FLOAT_VEC2': 35664,
        'FLOAT_MAT4': 35676,
        'FLOAT_MAT3': 35675,
        'FLOAT_MAT2': 35674,
        'FASTEST': 4353,
        'EQUAL': 514,
        'ELEMENT_ARRAY_BUFFER': 34963,
        'ELEMENT_ARRAY_BUFFER_BINDING': 34965,
        'DYNAMIC_DRAW': 35048,
        'DST_COLOR': 774,
        'DST_ALPHA': 772,
        'DONT_CARE': 4352,
        'DITHER': 3024,
        'DEPTH_WRITEMASK': 2930,
        'DEPTH_TEST': 2929,
        'DEPTH_STENCIL': 34041,
        'DEPTH_STENCIL_ATTACHMENT': 33306,
        'DEPTH_RANGE': 2928,
        'DEPTH_FUNC': 2932,
        'DEPTH_COMPONENT16': 33189,
        'DEPTH_COMPONENT': 6402,
        'DEPTH_CLEAR_VALUE': 2931,
        'DEPTH_BUFFER_BIT': 256,
        'DEPTH_BITS': 3414,
        'DEPTH_ATTACHMENT': 36096,
        'DELETE_STATUS': 35712,
        'DECR': 7683,
        'DECR_WRAP': 34056,
        'CW': 2304,
        'CURRENT_VERTEX_ATTRIB': 34342,
        'CURRENT_PROGRAM': 35725,
        'CULL_FACE': 2884,
        'CULL_FACE_MODE': 2885,
        'CONTEXT_LOST_WEBGL': 37442,
        'CONSTANT_COLOR': 32769,
        'CONSTANT_ALPHA': 32771,
        'COMPRESSED_TEXTURE_FORMATS': 34467,
        'COMPILE_STATUS': 35713,
        'COLOR_WRITEMASK': 3107,
        'COLOR_CLEAR_VALUE': 3106,
        'COLOR_BUFFER_BIT': 16384,
        'COLOR_ATTACHMENT0': 36064,
        'CLAMP_TO_EDGE': 33071,
        'CCW': 2305,
        'BYTE': 5120,
        'BUFFER_USAGE': 34661,
        'BUFFER_SIZE': 34660,
        'BROWSER_DEFAULT_WEBGL': 37444,
        'BOOL': 35670,
        'BOOL_VEC4': 35673,
        'BOOL_VEC3': 35672,
        'BOOL_VEC2': 35671,
        'BLUE_BITS': 3412,
        'BLEND': 3042,
        'BLEND_SRC_RGB': 32969,
        'BLEND_SRC_ALPHA': 32971,
        'BLEND_EQUATION': 32777,
        'BLEND_EQUATION_RGB': 32777,
        'BLEND_EQUATION_ALPHA': 34877,
        'BLEND_DST_RGB': 32968,
        'BLEND_DST_ALPHA': 32970,
        'BLEND_COLOR': 32773,
        'BACK': 1029,
        'ATTACHED_SHADERS': 35717,
        'ARRAY_BUFFER': 34962,
        'ARRAY_BUFFER_BINDING': 34964,
        'ALWAYS': 519,
        'ALPHA': 6406,
        'ALPHA_BITS': 3413,
        'ALIASED_POINT_SIZE_RANGE': 33901,
        'ALIASED_LINE_WIDTH_RANGE': 33902,
        'ACTIVE_UNIFORMS': 35718,
        'ACTIVE_TEXTURE': 34016,
        'ACTIVE_ATTRIBUTES': 35721
    };

    function loseContext () {
    }
    function restoreContext () {
    }
    function drawBuffersWEBGL () {
    }

    var extensions = {
        // ratified
        'OES_texture_float': {},
        'OES_texture_half_float': {},
        'WEBGL_lose_context': {
            loseContext,
            restoreContext
        },
        'OES_standard_derivatives': {},
        'OES_vertex_array_object': {},
        'WEBGL_debug_renderer_info': {
            'UNMASKED_VENDOR_WEBGL': 37445,
            'UNMASKED_RENDERER_WEBGL': 37446
        },
        'WEBGL_debug_shaders': {},
        'WEBGL_depth_texture': {},
        'OES_element_index_uint': {},
        'EXT_texture_filter_anisotropic': {
            'MAX_TEXTURE_MAX_ANISOTROPY_EXT': 34047,
            'TEXTURE_MAX_ANISOTROPY_EXT': 34046
        },
        'EXT_frag_depth': {},
        'WEBGL_draw_buffers': {
            'MAX_DRAW_BUFFERS_WEBGL': 34852,
            'MAX_COLOR_ATTACHMENTS_WEBGL': 36063,
            'DRAW_BUFFER9_WEBGL': 34862,
            'DRAW_BUFFER8_WEBGL': 34861,
            'DRAW_BUFFER7_WEBGL': 34860,
            'DRAW_BUFFER6_WEBGL': 34859,
            'DRAW_BUFFER5_WEBGL': 34858,
            'DRAW_BUFFER4_WEBGL': 34857,
            'DRAW_BUFFER3_WEBGL': 34856,
            'DRAW_BUFFER2_WEBGL': 34855,
            'DRAW_BUFFER15_WEBGL': 34868,
            'DRAW_BUFFER14_WEBGL': 34867,
            'DRAW_BUFFER13_WEBGL': 34866,
            'DRAW_BUFFER12_WEBGL': 34865,
            'DRAW_BUFFER11_WEBGL': 34864,
            'DRAW_BUFFER10_WEBGL': 34863,
            'DRAW_BUFFER1_WEBGL': 34854,
            'DRAW_BUFFER0_WEBGL': 34853,
            'COLOR_ATTACHMENT9_WEBGL': 36073,
            'COLOR_ATTACHMENT8_WEBGL': 36072,
            'COLOR_ATTACHMENT7_WEBGL': 36071,
            'COLOR_ATTACHMENT6_WEBGL': 36070,
            'COLOR_ATTACHMENT5_WEBGL': 36069,
            'COLOR_ATTACHMENT4_WEBGL': 36068,
            'COLOR_ATTACHMENT3_WEBGL': 36067,
            'COLOR_ATTACHMENT2_WEBGL': 36066,
            'COLOR_ATTACHMENT15_WEBGL': 36079,
            'COLOR_ATTACHMENT14_WEBGL': 36078,
            'COLOR_ATTACHMENT13_WEBGL': 36077,
            'COLOR_ATTACHMENT12_WEBGL': 36076,
            'COLOR_ATTACHMENT11_WEBGL': 36075,
            'COLOR_ATTACHMENT10_WEBGL': 36074,
            'COLOR_ATTACHMENT1_WEBGL': 36065,
            'COLOR_ATTACHMENT0_WEBGL': 36064,
            drawBuffersWEBGL
        },
        'ANGLE_instanced_arrays': null,
        'OES_texture_float_linear': {},
        'OES_texture_half_float_linear': {},
        'EXT_blend_minmax': {},
        'EXT_shader_texture_lod': {},
        'WEBGL_compressed_texture_atc': null,
        'WEBGL_compressed_texture_pvrtc': null,
        'EXT_color_buffer_half_float': {},
        'WEBGL_color_buffer_float': {},
        'EXT_sRGB': {},
        'WEBGL_compressed_texture_etc1': null,
        'WEBGL_compressed_texture_astc': {},
        'WEBGL_compressed_texture_etc': {},
        'WEBGL_compressed_texture_s3tc': {},
        'WEBGL_compressed_texture_s3tc_srgb': {},
    };

    function WebGLRenderingContext(canvas) {
        this.canvas = canvas;
        this.drawingBufferWidth = canvas.width;
        this.drawingBufferHeight = canvas.height;
    };

    functions.forEach(function (func) {
        WebGLRenderingContext.prototype[func] = function () {
            return {};
        };
    });

    Object.keys(enumerates).forEach(function (key) {
        WebGLRenderingContext.prototype[key] = enumerates[key];
    });

    WebGLRenderingContext.prototype.getExtension = function (ext) {
        console.log("WebGLRenderingContext.getExtension" + ext);
        return extensions[ext];
    };
   
    try {
        const getContext = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function () {
            var name = arguments[0];
            console.log("HTMLCanvasElement app requested extension: " + name);
            console.log(JSON.stringify(arguments, null, 4));
            if (name == 'webgl' || name == 'webgl-experimental' || name == 'experimental-webgl' || name == 'moz-webgl') {
                var y = new WebGLRenderingContext(this);
                console.log("WEBGL " + y);
                console.log(JSON.stringify(y, null, 4));
                return y;
            }
            if (name == 'webgl2' || name == 'experimental-webgl2' || name == 'fake-webgl') {
                console.log("WEBGL2")
                return null;
            }
            var ext = getContext.apply(this, arguments);
            console.log("HTMLCanvasElement extension " + name + " " + (ext ? "found" : "not found"));
            console.log(ext);
            return ext;
        }
    } catch (e) { }

    // fake webgl rendering
    try {
        const getParameter = WebGLRenderingContext.prototype.getParameter;
        WebGLRenderingContext.prototype.getParameter = function () {
            var name = arguments[0];
            console.log("WebGLRenderingContext - getParameter: " + name);
            // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
            // UNMASKED_VENDOR_WEBGL
            if (name == 37445) {
                // UNMASKED_VENDOR_WEBGL
                var options = ['Intel Open Source Technology Center', 'X.Org', 'Vendor Google Inc.'];
                return get_random_item(options);
            } else if (name == 37446) {
                // UNMASKED_RENDERER_WEBGL
                var options = ['Mesa DRI Intel(R) Ivybridge Mobile', 'AMD KAVERI (DRM 2.43.0 / 4.4.0-119-generic, LLVM 5.0.0)', 'Renderer Google SwiftShader', 'AMD ARUBA (DRM 2.43.0 / 4.4.0-119-generic, LLVM 5.0.0)', 'Mesa DRI Intel(R) HD Graphics 630 (Kaby Lake GT2)', 'Gallium 0.4 on AMD KAVERI (DRM 2.43.0 / 4.4.0-83-generic, LLVM 3.8.0)'];
                return get_random_item(options);
            } else if (name == 7937 || name == 7936) {
                // RENDERER // VENDOR
                return 'Mozilla';
            } else if (name == 35724) {
                // SHADING_LANGUAGE_VERSION
                return 'WebGL GLSL ES 1.0';
            } else if (name == 7937 || name == 7938) {
                // VERSION
                return 'WebGL 1.0';
            } else if (name == 7937 || name == 33901 || name == 33902) {
                // ALIASED_LINE_WIDTH_RANGE // ALIASED_POINT_SIZE_RANGE
                var option = new Float32Array([1, 8192]);
                return option;
            } else if (name == 3413 || name == 3412 || name == 3411 || name == 3410 || name == 34852) {
                return get_random_item([2, 4, 8, 16]);
            } else if (name == 3415) {
                return 0;
            } else if (name == 3414) {
                return 24;
            } else if (name == 34047 || name == 34921) {
                // MAX_TEXTURE_MAX_ANISOTROPY_EXT // MAX_VERTEX_ATTRIBS
                return get_random_items([2, 4, 8, 16]);
            } else if (name == 35661) {
                // MAX_COMBINED_TEXTURE_IMAGE_UNITS
                return get_random_items([128, 192, 256]);
            } else if (name == 34076 || name == 34024 || name == 3379) {
                // MAX_CUBE_MAP_TEXTURE_SIZE // MAX_RENDERBUFFER_SIZE
                return get_random_item([16384, 32768]) ;
            } else if (name == 36349 || name == 36347) {
                // MAX_FRAGMENT_UNIFORM_VECTORS // MAX_VERTEX_UNIFORM_VECTORS
                return get_random_item([4096, 8192]);
            } else if (name == 34930 || name == 36348 || name == 35660) {
                // MAX_TEXTURE_IMAGE_UNITS // MAX_VARYING_VECTORS // MAX_VERTEX_TEXTURE_IMAGE_UNITS
                return get_random_item([16, 32, 64]);
            } else if (name == 3386) {
                var value = get_random_item([8192, 16384, 32768])
                var options = new Int32Array([value, value]);
                return options;
            } else if (name == 3415) {
                return 0;
            } else {
                console.log("Retuning random value for: " + name);
                return get_random_item([0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]);
            }
            var ext = getParameter.apply(this, arguments);
            console.log("WebGLRenderingContext extension " + name + " " + (ext ? "found" : "not found"));
            console.log(JSON.stringify(ext, null, 4));

            return ext;
        }
    } catch (a) { }

    const getSupportedExtensions = WebGLRenderingContext.prototype.getSupportedExtensions;
    WebGLRenderingContext.prototype.getSupportedExtensions = function () {
        try {
            console.log("WebGLRenderingContext.getSupportedExtensions")
            var availableExtensions = Object.keys(extensions);
            console.log(availableExtensions);
            var itemsToGet = Math.floor(Math.random() * (availableExtensions.length - 6) + 5);
            console.log(itemsToGet);
            var selectedExtensions = get_random_items(availableExtensions, itemsToGet);
            console.log(selectedExtensions);
            return selectedExtensions;
        } catch (a) {
            console.log(a)
            return Object.keys(extensions);
        }
    }
    // in case of broken image return random height/width
    var size = 0;
    ['height', 'width'].forEach(property => {
        const imageDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, property);
        Object.defineProperty(HTMLImageElement.prototype, property, {
            imageDescriptor,
            get: function () {
                if (this.complete && this.naturalHeight == 0) {
                    if (!size) {
                        size = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
                    }
                    return size;
                }
                return imageDescriptor.get.apply(this);
            },
        });
    }); 
    // hairline feature (headless can't render it normally)
    const imageDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
        ...imageDescriptor,
        get: function () {
            if (this.id == 'modernizr') {
                return 1;
            }
            return imageDescriptor.get.apply(this);
        },
    });
} + ')();';

var script = document.createElement('script');
script.textContent = scriptCode;
(document.head || document.documentElement).appendChild(script);
script.remove();