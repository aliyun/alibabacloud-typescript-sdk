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
exports.DescribeLakebaseMountParameterGroupChangeLogsResponseBody = exports.DescribeLakebaseMountParameterGroupChangeLogsResponseBodyChangeLogs = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeLakebaseMountParameterGroupChangeLogsResponseBodyChangeLogs extends $dara.Model {
    static names() {
        return {
            changeType: 'ChangeType',
            createTime: 'CreateTime',
            creator: 'Creator',
            isApply: 'IsApply',
            modifyTime: 'ModifyTime',
            newValue: 'NewValue',
            oldValue: 'OldValue',
            parameterName: 'ParameterName',
        };
    }
    static types() {
        return {
            changeType: 'string',
            createTime: 'string',
            creator: 'string',
            isApply: 'string',
            modifyTime: 'string',
            newValue: 'string',
            oldValue: 'string',
            parameterName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeLakebaseMountParameterGroupChangeLogsResponseBodyChangeLogs = DescribeLakebaseMountParameterGroupChangeLogsResponseBodyChangeLogs;
class DescribeLakebaseMountParameterGroupChangeLogsResponseBody extends $dara.Model {
    static names() {
        return {
            changeLogs: 'ChangeLogs',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            changeLogs: { 'type': 'array', 'itemType': DescribeLakebaseMountParameterGroupChangeLogsResponseBodyChangeLogs },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.changeLogs)) {
            $dara.Model.validateArray(this.changeLogs);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeLakebaseMountParameterGroupChangeLogsResponseBody = DescribeLakebaseMountParameterGroupChangeLogsResponseBody;
//# sourceMappingURL=DescribeLakebaseMountParameterGroupChangeLogsResponseBody.js.map