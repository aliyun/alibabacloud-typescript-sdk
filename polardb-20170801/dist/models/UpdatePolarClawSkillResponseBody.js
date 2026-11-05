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
exports.UpdatePolarClawSkillResponseBody = exports.UpdatePolarClawSkillResponseBodyConfig = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdatePolarClawSkillResponseBodyConfig extends $dara.Model {
    static names() {
        return {
            enabled: 'Enabled',
            env: 'Env',
        };
    }
    static types() {
        return {
            enabled: 'boolean',
            env: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    }
    validate() {
        if (this.env) {
            $dara.Model.validateMap(this.env);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdatePolarClawSkillResponseBodyConfig = UpdatePolarClawSkillResponseBodyConfig;
class UpdatePolarClawSkillResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            code: 'Code',
            config: 'Config',
            message: 'Message',
            ok: 'Ok',
            requestId: 'RequestId',
            skillKey: 'SkillKey',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            code: 'number',
            config: UpdatePolarClawSkillResponseBodyConfig,
            message: 'string',
            ok: 'boolean',
            requestId: 'string',
            skillKey: 'string',
        };
    }
    validate() {
        if (this.config && typeof this.config.validate === 'function') {
            this.config.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdatePolarClawSkillResponseBody = UpdatePolarClawSkillResponseBody;
//# sourceMappingURL=UpdatePolarClawSkillResponseBody.js.map