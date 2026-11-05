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
exports.DescribeCrossCloudRegionResponseBody = exports.DescribeCrossCloudRegionResponseBodyCrossCloudRegionList = exports.DescribeCrossCloudRegionResponseBodyCrossCloudRegionListCrossCloudZoneList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCrossCloudRegionResponseBodyCrossCloudRegionListCrossCloudZoneList extends $dara.Model {
    static names() {
        return {
            crossCloudZoneId: 'CrossCloudZoneId',
            crossCloudZoneName: 'CrossCloudZoneName',
        };
    }
    static types() {
        return {
            crossCloudZoneId: 'string',
            crossCloudZoneName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCrossCloudRegionResponseBodyCrossCloudRegionListCrossCloudZoneList = DescribeCrossCloudRegionResponseBodyCrossCloudRegionListCrossCloudZoneList;
class DescribeCrossCloudRegionResponseBodyCrossCloudRegionList extends $dara.Model {
    static names() {
        return {
            crossCloudRegionId: 'CrossCloudRegionId',
            crossCloudRegionName: 'CrossCloudRegionName',
            crossCloudZoneList: 'CrossCloudZoneList',
            projectId: 'ProjectId',
        };
    }
    static types() {
        return {
            crossCloudRegionId: 'string',
            crossCloudRegionName: 'string',
            crossCloudZoneList: { 'type': 'array', 'itemType': DescribeCrossCloudRegionResponseBodyCrossCloudRegionListCrossCloudZoneList },
            projectId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.crossCloudZoneList)) {
            $dara.Model.validateArray(this.crossCloudZoneList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCrossCloudRegionResponseBodyCrossCloudRegionList = DescribeCrossCloudRegionResponseBodyCrossCloudRegionList;
class DescribeCrossCloudRegionResponseBody extends $dara.Model {
    static names() {
        return {
            crossCloudRegionList: 'CrossCloudRegionList',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            crossCloudRegionList: { 'type': 'array', 'itemType': DescribeCrossCloudRegionResponseBodyCrossCloudRegionList },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.crossCloudRegionList)) {
            $dara.Model.validateArray(this.crossCloudRegionList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCrossCloudRegionResponseBody = DescribeCrossCloudRegionResponseBody;
//# sourceMappingURL=DescribeCrossCloudRegionResponseBody.js.map