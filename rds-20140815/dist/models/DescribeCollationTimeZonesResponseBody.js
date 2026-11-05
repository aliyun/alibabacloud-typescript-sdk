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
exports.DescribeCollationTimeZonesResponseBody = exports.DescribeCollationTimeZonesResponseBodyCollationTimeZones = exports.DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone extends $dara.Model {
    static names() {
        return {
            description: 'Description',
            standardTimeOffset: 'StandardTimeOffset',
            timeZone: 'TimeZone',
        };
    }
    static types() {
        return {
            description: 'string',
            standardTimeOffset: 'string',
            timeZone: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone = DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone;
class DescribeCollationTimeZonesResponseBodyCollationTimeZones extends $dara.Model {
    static names() {
        return {
            collationTimeZone: 'CollationTimeZone',
        };
    }
    static types() {
        return {
            collationTimeZone: { 'type': 'array', 'itemType': DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone },
        };
    }
    validate() {
        if (Array.isArray(this.collationTimeZone)) {
            $dara.Model.validateArray(this.collationTimeZone);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCollationTimeZonesResponseBodyCollationTimeZones = DescribeCollationTimeZonesResponseBodyCollationTimeZones;
class DescribeCollationTimeZonesResponseBody extends $dara.Model {
    static names() {
        return {
            collationTimeZones: 'CollationTimeZones',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            collationTimeZones: DescribeCollationTimeZonesResponseBodyCollationTimeZones,
            requestId: 'string',
        };
    }
    validate() {
        if (this.collationTimeZones && typeof this.collationTimeZones.validate === 'function') {
            this.collationTimeZones.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCollationTimeZonesResponseBody = DescribeCollationTimeZonesResponseBody;
//# sourceMappingURL=DescribeCollationTimeZonesResponseBody.js.map