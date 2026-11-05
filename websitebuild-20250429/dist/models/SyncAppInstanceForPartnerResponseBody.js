"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncAppInstanceForPartnerResponseBody = exports.SyncAppInstanceForPartnerResponseBodyData = exports.SyncAppInstanceForPartnerResponseBodyDataAppInstance = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class SyncAppInstanceForPartnerResponseBodyDataAppInstance extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
        };
    }
    static types() {
        return {
            bizId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SyncAppInstanceForPartnerResponseBodyDataAppInstance = SyncAppInstanceForPartnerResponseBodyDataAppInstance;
class SyncAppInstanceForPartnerResponseBodyData extends $dara.Model {
    static names() {
        return {
            appInstance: 'AppInstance',
        };
    }
    static types() {
        return {
            appInstance: SyncAppInstanceForPartnerResponseBodyDataAppInstance,
        };
    }
    validate() {
        if (this.appInstance && typeof this.appInstance.validate === 'function') {
            this.appInstance.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SyncAppInstanceForPartnerResponseBodyData = SyncAppInstanceForPartnerResponseBodyData;
class SyncAppInstanceForPartnerResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: SyncAppInstanceForPartnerResponseBodyData,
            requestId: 'string',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SyncAppInstanceForPartnerResponseBody = SyncAppInstanceForPartnerResponseBody;
//# sourceMappingURL=SyncAppInstanceForPartnerResponseBody.js.map