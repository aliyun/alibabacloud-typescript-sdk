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
exports.DescribeRCImageListResponseBody = exports.DescribeRCImageListResponseBodyImages = exports.DescribeRCImageListResponseBodyImagesDiskDeviceMappings = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCImageListResponseBodyImagesDiskDeviceMappings extends $dara.Model {
    static names() {
        return {
            device: 'Device',
            size: 'Size',
            type: 'Type',
        };
    }
    static types() {
        return {
            device: 'string',
            size: 'string',
            type: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCImageListResponseBodyImagesDiskDeviceMappings = DescribeRCImageListResponseBodyImagesDiskDeviceMappings;
class DescribeRCImageListResponseBodyImages extends $dara.Model {
    static names() {
        return {
            architecture: 'Architecture',
            creationTime: 'CreationTime',
            description: 'Description',
            diskDeviceMappings: 'DiskDeviceMappings',
            imageId: 'ImageId',
            imageName: 'ImageName',
            imageVersion: 'ImageVersion',
            isPublic: 'IsPublic',
            isSupportRdsCustom: 'IsSupportRdsCustom',
            OSName: 'OSName',
            OSNameEn: 'OSNameEn',
            OSType: 'OSType',
            platform: 'Platform',
            size: 'Size',
            status: 'Status',
            usage: 'Usage',
        };
    }
    static types() {
        return {
            architecture: 'string',
            creationTime: 'string',
            description: 'string',
            diskDeviceMappings: { 'type': 'array', 'itemType': DescribeRCImageListResponseBodyImagesDiskDeviceMappings },
            imageId: 'string',
            imageName: 'string',
            imageVersion: 'string',
            isPublic: 'boolean',
            isSupportRdsCustom: 'boolean',
            OSName: 'string',
            OSNameEn: 'string',
            OSType: 'string',
            platform: 'string',
            size: 'number',
            status: 'string',
            usage: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.diskDeviceMappings)) {
            $dara.Model.validateArray(this.diskDeviceMappings);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCImageListResponseBodyImages = DescribeRCImageListResponseBodyImages;
class DescribeRCImageListResponseBody extends $dara.Model {
    static names() {
        return {
            images: 'Images',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            regionId: 'RegionId',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            images: { 'type': 'array', 'itemType': DescribeRCImageListResponseBodyImages },
            pageNumber: 'number',
            pageSize: 'number',
            regionId: 'string',
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.images)) {
            $dara.Model.validateArray(this.images);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCImageListResponseBody = DescribeRCImageListResponseBody;
//# sourceMappingURL=DescribeRcimageListResponseBody.js.map