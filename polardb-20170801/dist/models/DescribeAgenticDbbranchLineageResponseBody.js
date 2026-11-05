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
exports.DescribeAgenticDBBranchLineageResponseBody = exports.DescribeAgenticDBBranchLineageResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAgenticDBBranchLineageResponseBodyItems extends $dara.Model {
    static names() {
        return {
            branchComputeClusterId: 'BranchComputeClusterId',
            branchDescription: 'BranchDescription',
            branchId: 'BranchId',
            branchName: 'BranchName',
            createTime: 'CreateTime',
            depth: 'Depth',
            directChildCount: 'DirectChildCount',
            hasMoreAncestors: 'HasMoreAncestors',
            hasMoreChildren: 'HasMoreChildren',
            isAnchor: 'IsAnchor',
            isDefaultBranch: 'IsDefaultBranch',
            isRoot: 'IsRoot',
            parentBranchId: 'ParentBranchId',
            parentBranchName: 'ParentBranchName',
            status: 'Status',
        };
    }
    static types() {
        return {
            branchComputeClusterId: 'string',
            branchDescription: 'string',
            branchId: 'string',
            branchName: 'string',
            createTime: 'string',
            depth: 'number',
            directChildCount: 'number',
            hasMoreAncestors: 'boolean',
            hasMoreChildren: 'boolean',
            isAnchor: 'boolean',
            isDefaultBranch: 'boolean',
            isRoot: 'boolean',
            parentBranchId: 'string',
            parentBranchName: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAgenticDBBranchLineageResponseBodyItems = DescribeAgenticDBBranchLineageResponseBodyItems;
class DescribeAgenticDBBranchLineageResponseBody extends $dara.Model {
    static names() {
        return {
            anchorBranchId: 'AnchorBranchId',
            items: 'Items',
            nodeCount: 'NodeCount',
            projectId: 'ProjectId',
            projectName: 'ProjectName',
            requestId: 'RequestId',
            rootBranchId: 'RootBranchId',
            tenantId: 'TenantId',
        };
    }
    static types() {
        return {
            anchorBranchId: 'string',
            items: { 'type': 'array', 'itemType': DescribeAgenticDBBranchLineageResponseBodyItems },
            nodeCount: 'number',
            projectId: 'string',
            projectName: 'string',
            requestId: 'string',
            rootBranchId: 'string',
            tenantId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAgenticDBBranchLineageResponseBody = DescribeAgenticDBBranchLineageResponseBody;
//# sourceMappingURL=DescribeAgenticDbbranchLineageResponseBody.js.map