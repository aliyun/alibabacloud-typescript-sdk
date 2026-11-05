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
exports.ListApplicationAssignmentsForPrincipalResponseBody = exports.ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignment = exports.ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignmentApplicationAssignmentInfo = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignmentApplicationAssignmentInfo extends $dara.Model {
    static names() {
        return {
            appId: 'AppId',
            createTime: 'CreateTime',
            principalName: 'PrincipalName',
            principalType: 'PrincipalType',
        };
    }
    static types() {
        return {
            appId: 'string',
            createTime: 'string',
            principalName: 'string',
            principalType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignmentApplicationAssignmentInfo = ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignmentApplicationAssignmentInfo;
class ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignment extends $dara.Model {
    static names() {
        return {
            applicationAssignmentInfo: 'ApplicationAssignmentInfo',
        };
    }
    static types() {
        return {
            applicationAssignmentInfo: { 'type': 'array', 'itemType': ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignmentApplicationAssignmentInfo },
        };
    }
    validate() {
        if (Array.isArray(this.applicationAssignmentInfo)) {
            $dara.Model.validateArray(this.applicationAssignmentInfo);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignment = ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignment;
class ListApplicationAssignmentsForPrincipalResponseBody extends $dara.Model {
    static names() {
        return {
            applicationAssignment: 'ApplicationAssignment',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            applicationAssignment: ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignment,
            maxResults: 'number',
            nextToken: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (this.applicationAssignment && typeof this.applicationAssignment.validate === 'function') {
            this.applicationAssignment.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApplicationAssignmentsForPrincipalResponseBody = ListApplicationAssignmentsForPrincipalResponseBody;
//# sourceMappingURL=ListApplicationAssignmentsForPrincipalResponseBody.js.map