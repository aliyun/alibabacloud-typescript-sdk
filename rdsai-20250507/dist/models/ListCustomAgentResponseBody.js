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
exports.ListCustomAgentResponseBody = exports.ListCustomAgentResponseBodySkills = exports.ListCustomAgentResponseBodyData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListCustomAgentResponseBodyData extends $dara.Model {
    static names() {
        return {
            createdAt: 'CreatedAt',
            enableTools: 'EnableTools',
            id: 'Id',
            name: 'Name',
            systemPrompt: 'SystemPrompt',
            tools: 'Tools',
            updatedAt: 'UpdatedAt',
        };
    }
    static types() {
        return {
            createdAt: 'string',
            enableTools: 'boolean',
            id: 'string',
            name: 'string',
            systemPrompt: 'string',
            tools: { 'type': 'array', 'itemType': 'string' },
            updatedAt: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.tools)) {
            $dara.Model.validateArray(this.tools);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListCustomAgentResponseBodyData = ListCustomAgentResponseBodyData;
class ListCustomAgentResponseBodySkills extends $dara.Model {
    static names() {
        return {
            description: 'Description',
            id: 'Id',
            name: 'Name',
            skillType: 'SkillType',
        };
    }
    static types() {
        return {
            description: 'string',
            id: 'string',
            name: 'string',
            skillType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListCustomAgentResponseBodySkills = ListCustomAgentResponseBodySkills;
class ListCustomAgentResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            skills: 'Skills',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            data: { 'type': 'array', 'itemType': ListCustomAgentResponseBodyData },
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            skills: { 'type': 'array', 'itemType': ListCustomAgentResponseBodySkills },
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.data)) {
            $dara.Model.validateArray(this.data);
        }
        if (Array.isArray(this.skills)) {
            $dara.Model.validateArray(this.skills);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListCustomAgentResponseBody = ListCustomAgentResponseBody;
//# sourceMappingURL=ListCustomAgentResponseBody.js.map