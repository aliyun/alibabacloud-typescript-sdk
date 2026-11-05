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
exports.ListSkillReferencesResponseBody = exports.ListSkillReferencesResponseBodyData = exports.ListSkillReferencesResponseBodyDataPageItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListSkillReferencesResponseBodyDataPageItems extends $dara.Model {
    static names() {
        return {
            ownerId: 'ownerId',
            ownerType: 'ownerType',
            ownerVersion: 'ownerVersion',
            selectorType: 'selectorType',
            selectorValue: 'selectorValue',
            skillName: 'skillName',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            ownerId: 'string',
            ownerType: 'string',
            ownerVersion: 'string',
            selectorType: 'string',
            selectorValue: 'string',
            skillName: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListSkillReferencesResponseBodyDataPageItems = ListSkillReferencesResponseBodyDataPageItems;
class ListSkillReferencesResponseBodyData extends $dara.Model {
    static names() {
        return {
            pageItems: 'pageItems',
            pageNumber: 'pageNumber',
            pagesAvailable: 'pagesAvailable',
            totalCount: 'totalCount',
        };
    }
    static types() {
        return {
            pageItems: { 'type': 'array', 'itemType': ListSkillReferencesResponseBodyDataPageItems },
            pageNumber: 'number',
            pagesAvailable: 'number',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.pageItems)) {
            $dara.Model.validateArray(this.pageItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListSkillReferencesResponseBodyData = ListSkillReferencesResponseBodyData;
class ListSkillReferencesResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'data',
            requestId: 'requestId',
        };
    }
    static types() {
        return {
            data: ListSkillReferencesResponseBodyData,
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
exports.ListSkillReferencesResponseBody = ListSkillReferencesResponseBody;
//# sourceMappingURL=ListSkillReferencesResponseBody.js.map