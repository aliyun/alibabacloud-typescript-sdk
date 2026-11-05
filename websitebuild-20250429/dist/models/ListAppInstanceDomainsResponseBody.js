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
exports.ListAppInstanceDomainsResponseBody = exports.ListAppInstanceDomainsResponseBodyModule = exports.ListAppInstanceDomainsResponseBodyModuleNext = exports.ListAppInstanceDomainsResponseBodyModuleNextVerification = exports.ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord = exports.ListAppInstanceDomainsResponseBodyModuleNextResolution = exports.ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord = exports.ListAppInstanceDomainsResponseBodyModuleNextQualification = exports.ListAppInstanceDomainsResponseBodyModuleNextOwnership = exports.ListAppInstanceDomainsResponseBodyModuleNextMigration = exports.ListAppInstanceDomainsResponseBodyModuleNextDnsConflict = exports.ListAppInstanceDomainsResponseBodyModuleNextDnsConflictRecords = exports.ListAppInstanceDomainsResponseBodyModuleNextCertificate = exports.ListAppInstanceDomainsResponseBodyModuleData = exports.ListAppInstanceDomainsResponseBodyModuleDataVerification = exports.ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord = exports.ListAppInstanceDomainsResponseBodyModuleDataResolution = exports.ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord = exports.ListAppInstanceDomainsResponseBodyModuleDataQualification = exports.ListAppInstanceDomainsResponseBodyModuleDataOwnership = exports.ListAppInstanceDomainsResponseBodyModuleDataMigration = exports.ListAppInstanceDomainsResponseBodyModuleDataDnsConflict = exports.ListAppInstanceDomainsResponseBodyModuleDataDnsConflictRecords = exports.ListAppInstanceDomainsResponseBodyModuleDataCertificate = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListAppInstanceDomainsResponseBodyModuleDataCertificate extends $dara.Model {
    static names() {
        return {
            certificateName: 'CertificateName',
            certificateStatus: 'CertificateStatus',
            certificateType: 'CertificateType',
            endTime: 'EndTime',
        };
    }
    static types() {
        return {
            certificateName: 'string',
            certificateStatus: 'string',
            certificateType: 'string',
            endTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleDataCertificate = ListAppInstanceDomainsResponseBodyModuleDataCertificate;
class ListAppInstanceDomainsResponseBodyModuleDataDnsConflictRecords extends $dara.Model {
    static names() {
        return {
            host: 'Host',
            recordType: 'RecordType',
            status: 'Status',
            value: 'Value',
        };
    }
    static types() {
        return {
            host: 'string',
            recordType: 'string',
            status: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleDataDnsConflictRecords = ListAppInstanceDomainsResponseBodyModuleDataDnsConflictRecords;
class ListAppInstanceDomainsResponseBodyModuleDataDnsConflict extends $dara.Model {
    static names() {
        return {
            canAutoResolve: 'CanAutoResolve',
            hasConflict: 'HasConflict',
            message: 'Message',
            records: 'Records',
        };
    }
    static types() {
        return {
            canAutoResolve: 'boolean',
            hasConflict: 'boolean',
            message: 'string',
            records: { 'type': 'array', 'itemType': ListAppInstanceDomainsResponseBodyModuleDataDnsConflictRecords },
        };
    }
    validate() {
        if (Array.isArray(this.records)) {
            $dara.Model.validateArray(this.records);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleDataDnsConflict = ListAppInstanceDomainsResponseBodyModuleDataDnsConflict;
class ListAppInstanceDomainsResponseBodyModuleDataMigration extends $dara.Model {
    static names() {
        return {
            migrationStatus: 'MigrationStatus',
            previousDomain: 'PreviousDomain',
        };
    }
    static types() {
        return {
            migrationStatus: 'string',
            previousDomain: 'any',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleDataMigration = ListAppInstanceDomainsResponseBodyModuleDataMigration;
class ListAppInstanceDomainsResponseBodyModuleDataOwnership extends $dara.Model {
    static names() {
        return {
            account: 'Account',
            provider: 'Provider',
            rootDomain: 'RootDomain',
        };
    }
    static types() {
        return {
            account: 'string',
            provider: 'string',
            rootDomain: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleDataOwnership = ListAppInstanceDomainsResponseBodyModuleDataOwnership;
class ListAppInstanceDomainsResponseBodyModuleDataQualification extends $dara.Model {
    static names() {
        return {
            icpRecordNumber: 'IcpRecordNumber',
            icpSiteRecordNumber: 'IcpSiteRecordNumber',
            policeRecordNumber: 'PoliceRecordNumber',
        };
    }
    static types() {
        return {
            icpRecordNumber: 'string',
            icpSiteRecordNumber: 'string',
            policeRecordNumber: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleDataQualification = ListAppInstanceDomainsResponseBodyModuleDataQualification;
class ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord extends $dara.Model {
    static names() {
        return {
            host: 'Host',
            recordType: 'RecordType',
            value: 'Value',
        };
    }
    static types() {
        return {
            host: 'string',
            recordType: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord = ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord;
class ListAppInstanceDomainsResponseBodyModuleDataResolution extends $dara.Model {
    static names() {
        return {
            dnsRecord: 'DnsRecord',
            errorMsg: 'ErrorMsg',
            resolutionStatus: 'ResolutionStatus',
        };
    }
    static types() {
        return {
            dnsRecord: ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord,
            errorMsg: 'string',
            resolutionStatus: 'string',
        };
    }
    validate() {
        if (this.dnsRecord && typeof this.dnsRecord.validate === 'function') {
            this.dnsRecord.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleDataResolution = ListAppInstanceDomainsResponseBodyModuleDataResolution;
class ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord extends $dara.Model {
    static names() {
        return {
            host: 'Host',
            recordType: 'RecordType',
            value: 'Value',
        };
    }
    static types() {
        return {
            host: 'string',
            recordType: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord = ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord;
class ListAppInstanceDomainsResponseBodyModuleDataVerification extends $dara.Model {
    static names() {
        return {
            dnsRecord: 'DnsRecord',
            errorMsg: 'ErrorMsg',
            verificationStatus: 'VerificationStatus',
            verificationStatusCode: 'VerificationStatusCode',
        };
    }
    static types() {
        return {
            dnsRecord: ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord,
            errorMsg: 'string',
            verificationStatus: 'string',
            verificationStatusCode: 'string',
        };
    }
    validate() {
        if (this.dnsRecord && typeof this.dnsRecord.validate === 'function') {
            this.dnsRecord.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleDataVerification = ListAppInstanceDomainsResponseBodyModuleDataVerification;
class ListAppInstanceDomainsResponseBodyModuleData extends $dara.Model {
    static names() {
        return {
            certificate: 'Certificate',
            createTime: 'CreateTime',
            deployType: 'DeployType',
            dnsConflict: 'DnsConflict',
            domainName: 'DomainName',
            domainType: 'DomainType',
            icpFilingStatus: 'IcpFilingStatus',
            migration: 'Migration',
            offline: 'Offline',
            overallStatus: 'OverallStatus',
            ownership: 'Ownership',
            qualification: 'Qualification',
            redirectDomain: 'RedirectDomain',
            resolution: 'Resolution',
            verification: 'Verification',
        };
    }
    static types() {
        return {
            certificate: ListAppInstanceDomainsResponseBodyModuleDataCertificate,
            createTime: 'string',
            deployType: 'string',
            dnsConflict: ListAppInstanceDomainsResponseBodyModuleDataDnsConflict,
            domainName: 'string',
            domainType: 'string',
            icpFilingStatus: 'string',
            migration: ListAppInstanceDomainsResponseBodyModuleDataMigration,
            offline: 'boolean',
            overallStatus: 'string',
            ownership: ListAppInstanceDomainsResponseBodyModuleDataOwnership,
            qualification: ListAppInstanceDomainsResponseBodyModuleDataQualification,
            redirectDomain: 'string',
            resolution: ListAppInstanceDomainsResponseBodyModuleDataResolution,
            verification: ListAppInstanceDomainsResponseBodyModuleDataVerification,
        };
    }
    validate() {
        if (this.certificate && typeof this.certificate.validate === 'function') {
            this.certificate.validate();
        }
        if (this.dnsConflict && typeof this.dnsConflict.validate === 'function') {
            this.dnsConflict.validate();
        }
        if (this.migration && typeof this.migration.validate === 'function') {
            this.migration.validate();
        }
        if (this.ownership && typeof this.ownership.validate === 'function') {
            this.ownership.validate();
        }
        if (this.qualification && typeof this.qualification.validate === 'function') {
            this.qualification.validate();
        }
        if (this.resolution && typeof this.resolution.validate === 'function') {
            this.resolution.validate();
        }
        if (this.verification && typeof this.verification.validate === 'function') {
            this.verification.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleData = ListAppInstanceDomainsResponseBodyModuleData;
class ListAppInstanceDomainsResponseBodyModuleNextCertificate extends $dara.Model {
    static names() {
        return {
            certificateName: 'CertificateName',
            certificateStatus: 'CertificateStatus',
            certificateType: 'CertificateType',
            endTime: 'EndTime',
        };
    }
    static types() {
        return {
            certificateName: 'string',
            certificateStatus: 'string',
            certificateType: 'string',
            endTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleNextCertificate = ListAppInstanceDomainsResponseBodyModuleNextCertificate;
class ListAppInstanceDomainsResponseBodyModuleNextDnsConflictRecords extends $dara.Model {
    static names() {
        return {
            host: 'Host',
            recordType: 'RecordType',
            value: 'Value',
        };
    }
    static types() {
        return {
            host: 'string',
            recordType: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleNextDnsConflictRecords = ListAppInstanceDomainsResponseBodyModuleNextDnsConflictRecords;
class ListAppInstanceDomainsResponseBodyModuleNextDnsConflict extends $dara.Model {
    static names() {
        return {
            canAutoResolve: 'CanAutoResolve',
            hasConflict: 'HasConflict',
            message: 'Message',
            records: 'Records',
        };
    }
    static types() {
        return {
            canAutoResolve: 'boolean',
            hasConflict: 'boolean',
            message: 'string',
            records: { 'type': 'array', 'itemType': ListAppInstanceDomainsResponseBodyModuleNextDnsConflictRecords },
        };
    }
    validate() {
        if (Array.isArray(this.records)) {
            $dara.Model.validateArray(this.records);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleNextDnsConflict = ListAppInstanceDomainsResponseBodyModuleNextDnsConflict;
class ListAppInstanceDomainsResponseBodyModuleNextMigration extends $dara.Model {
    static names() {
        return {
            migrationStatus: 'MigrationStatus',
            previousDomain: 'PreviousDomain',
        };
    }
    static types() {
        return {
            migrationStatus: 'string',
            previousDomain: 'any',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleNextMigration = ListAppInstanceDomainsResponseBodyModuleNextMigration;
class ListAppInstanceDomainsResponseBodyModuleNextOwnership extends $dara.Model {
    static names() {
        return {
            account: 'Account',
            provider: 'Provider',
            rootDomain: 'RootDomain',
        };
    }
    static types() {
        return {
            account: 'string',
            provider: 'string',
            rootDomain: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleNextOwnership = ListAppInstanceDomainsResponseBodyModuleNextOwnership;
class ListAppInstanceDomainsResponseBodyModuleNextQualification extends $dara.Model {
    static names() {
        return {
            icpRecordNumber: 'IcpRecordNumber',
            icpSiteRecordNumber: 'IcpSiteRecordNumber',
            policeRecordNumber: 'PoliceRecordNumber',
        };
    }
    static types() {
        return {
            icpRecordNumber: 'string',
            icpSiteRecordNumber: 'string',
            policeRecordNumber: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleNextQualification = ListAppInstanceDomainsResponseBodyModuleNextQualification;
class ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord extends $dara.Model {
    static names() {
        return {
            host: 'Host',
            recordType: 'RecordType',
            value: 'Value',
        };
    }
    static types() {
        return {
            host: 'string',
            recordType: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord = ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord;
class ListAppInstanceDomainsResponseBodyModuleNextResolution extends $dara.Model {
    static names() {
        return {
            dnsRecord: 'DnsRecord',
            errorMsg: 'ErrorMsg',
            resolutionStatus: 'ResolutionStatus',
        };
    }
    static types() {
        return {
            dnsRecord: ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord,
            errorMsg: 'string',
            resolutionStatus: 'string',
        };
    }
    validate() {
        if (this.dnsRecord && typeof this.dnsRecord.validate === 'function') {
            this.dnsRecord.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleNextResolution = ListAppInstanceDomainsResponseBodyModuleNextResolution;
class ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord extends $dara.Model {
    static names() {
        return {
            host: 'Host',
            recordType: 'RecordType',
            value: 'Value',
        };
    }
    static types() {
        return {
            host: 'string',
            recordType: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord = ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord;
class ListAppInstanceDomainsResponseBodyModuleNextVerification extends $dara.Model {
    static names() {
        return {
            dnsRecord: 'DnsRecord',
            errorMsg: 'ErrorMsg',
            verificationStatus: 'VerificationStatus',
            verificationStatusCode: 'VerificationStatusCode',
        };
    }
    static types() {
        return {
            dnsRecord: ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord,
            errorMsg: 'string',
            verificationStatus: 'string',
            verificationStatusCode: 'string',
        };
    }
    validate() {
        if (this.dnsRecord && typeof this.dnsRecord.validate === 'function') {
            this.dnsRecord.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleNextVerification = ListAppInstanceDomainsResponseBodyModuleNextVerification;
class ListAppInstanceDomainsResponseBodyModuleNext extends $dara.Model {
    static names() {
        return {
            certificate: 'Certificate',
            createTime: 'CreateTime',
            deployType: 'DeployType',
            dnsConflict: 'DnsConflict',
            domainName: 'DomainName',
            domainType: 'DomainType',
            icpFilingStatus: 'IcpFilingStatus',
            migration: 'Migration',
            offline: 'Offline',
            overallStatus: 'OverallStatus',
            ownership: 'Ownership',
            qualification: 'Qualification',
            resolution: 'Resolution',
            verification: 'Verification',
        };
    }
    static types() {
        return {
            certificate: ListAppInstanceDomainsResponseBodyModuleNextCertificate,
            createTime: 'string',
            deployType: 'string',
            dnsConflict: ListAppInstanceDomainsResponseBodyModuleNextDnsConflict,
            domainName: 'string',
            domainType: 'string',
            icpFilingStatus: 'string',
            migration: ListAppInstanceDomainsResponseBodyModuleNextMigration,
            offline: 'boolean',
            overallStatus: 'string',
            ownership: ListAppInstanceDomainsResponseBodyModuleNextOwnership,
            qualification: ListAppInstanceDomainsResponseBodyModuleNextQualification,
            resolution: ListAppInstanceDomainsResponseBodyModuleNextResolution,
            verification: ListAppInstanceDomainsResponseBodyModuleNextVerification,
        };
    }
    validate() {
        if (this.certificate && typeof this.certificate.validate === 'function') {
            this.certificate.validate();
        }
        if (this.dnsConflict && typeof this.dnsConflict.validate === 'function') {
            this.dnsConflict.validate();
        }
        if (this.migration && typeof this.migration.validate === 'function') {
            this.migration.validate();
        }
        if (this.ownership && typeof this.ownership.validate === 'function') {
            this.ownership.validate();
        }
        if (this.qualification && typeof this.qualification.validate === 'function') {
            this.qualification.validate();
        }
        if (this.resolution && typeof this.resolution.validate === 'function') {
            this.resolution.validate();
        }
        if (this.verification && typeof this.verification.validate === 'function') {
            this.verification.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModuleNext = ListAppInstanceDomainsResponseBodyModuleNext;
class ListAppInstanceDomainsResponseBodyModule extends $dara.Model {
    static names() {
        return {
            currentPageNum: 'CurrentPageNum',
            data: 'Data',
            next: 'Next',
            nextPage: 'NextPage',
            pageSize: 'PageSize',
            prePage: 'PrePage',
            resultLimit: 'ResultLimit',
            totalItemNum: 'TotalItemNum',
            totalPageNum: 'TotalPageNum',
        };
    }
    static types() {
        return {
            currentPageNum: 'number',
            data: { 'type': 'array', 'itemType': ListAppInstanceDomainsResponseBodyModuleData },
            next: ListAppInstanceDomainsResponseBodyModuleNext,
            nextPage: 'boolean',
            pageSize: 'number',
            prePage: 'boolean',
            resultLimit: 'boolean',
            totalItemNum: 'number',
            totalPageNum: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.data)) {
            $dara.Model.validateArray(this.data);
        }
        if (this.next && typeof this.next.validate === 'function') {
            this.next.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBodyModule = ListAppInstanceDomainsResponseBodyModule;
class ListAppInstanceDomainsResponseBody extends $dara.Model {
    static names() {
        return {
            accessDeniedDetail: 'AccessDeniedDetail',
            allowRetry: 'AllowRetry',
            appName: 'AppName',
            dynamicCode: 'DynamicCode',
            dynamicMessage: 'DynamicMessage',
            errorArgs: 'ErrorArgs',
            maxResults: 'MaxResults',
            module: 'Module',
            nextToken: 'NextToken',
            requestId: 'RequestId',
            rootErrorCode: 'RootErrorCode',
            rootErrorMsg: 'RootErrorMsg',
            synchro: 'Synchro',
        };
    }
    static types() {
        return {
            accessDeniedDetail: 'string',
            allowRetry: 'boolean',
            appName: 'string',
            dynamicCode: 'string',
            dynamicMessage: 'string',
            errorArgs: { 'type': 'array', 'itemType': 'any' },
            maxResults: 'number',
            module: ListAppInstanceDomainsResponseBodyModule,
            nextToken: 'string',
            requestId: 'string',
            rootErrorCode: 'string',
            rootErrorMsg: 'string',
            synchro: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.errorArgs)) {
            $dara.Model.validateArray(this.errorArgs);
        }
        if (this.module && typeof this.module.validate === 'function') {
            this.module.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppInstanceDomainsResponseBody = ListAppInstanceDomainsResponseBody;
//# sourceMappingURL=ListAppInstanceDomainsResponseBody.js.map