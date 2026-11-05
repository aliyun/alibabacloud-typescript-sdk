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
exports.DescribePolarClawSkillTemplateResponseBody = exports.DescribePolarClawSkillTemplateResponseBodySkillTemplates = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarClawSkillTemplateResponseBodySkillTemplates extends $dara.Model {
    static names() {
        return {
            created: 'Created',
            modified: 'Modified',
            skillTemplateDesc: 'SkillTemplateDesc',
            skillTemplateId: 'SkillTemplateId',
            skillTemplateName: 'SkillTemplateName',
            skills: 'Skills',
            srcApplicationId: 'SrcApplicationId',
        };
    }
    static types() {
        return {
            created: 'string',
            modified: 'string',
            skillTemplateDesc: 'string',
            skillTemplateId: 'string',
            skillTemplateName: 'string',
            skills: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            srcApplicationId: 'string',
        };
    }
    validate() {
        if (this.skills) {
            $dara.Model.validateMap(this.skills);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawSkillTemplateResponseBodySkillTemplates = DescribePolarClawSkillTemplateResponseBodySkillTemplates;
class DescribePolarClawSkillTemplateResponseBody extends $dara.Model {
    static names() {
        return {
            requestId: 'RequestId',
            skillTemplates: 'SkillTemplates',
        };
    }
    static types() {
        return {
            requestId: 'string',
            skillTemplates: { 'type': 'array', 'itemType': DescribePolarClawSkillTemplateResponseBodySkillTemplates },
        };
    }
    validate() {
        if (Array.isArray(this.skillTemplates)) {
            $dara.Model.validateArray(this.skillTemplates);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawSkillTemplateResponseBody = DescribePolarClawSkillTemplateResponseBody;
//# sourceMappingURL=DescribePolarClawSkillTemplateResponseBody.js.map