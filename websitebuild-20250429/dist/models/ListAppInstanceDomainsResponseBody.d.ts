import * as $dara from '@darabonba/typescript';
export declare class ListAppInstanceDomainsResponseBodyModuleDataCertificate extends $dara.Model {
    /**
     * @remarks
     * The certificate name.
     *
     * @example
     * 2024
     */
    certificateName?: string;
    /**
     * @remarks
     * The certificate status.
     *
     * @example
     * ACTIVE
     */
    certificateStatus?: string;
    /**
     * @remarks
     * The certificate type.
     *
     * @example
     * self-signed
     */
    certificateType?: string;
    /**
     * @remarks
     * The expiration time of the certificate. The value is a UNIX timestamp in milliseconds.
     *
     * @example
     * 4885718400000
     */
    endTime?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleDataDnsConflictRecords extends $dara.Model {
    /**
     * @remarks
     * The host record.
     *
     * @example
     * www
     */
    host?: string;
    /**
     * @remarks
     * The record type.
     *
     * @example
     * A
     */
    recordType?: string;
    /**
     * @remarks
     * The status of the conflicting DNS record. A value of ENABLE indicates that the record is enabled.
     *
     * @example
     * ENABLE
     */
    status?: string;
    /**
     * @remarks
     * The record value.
     *
     * @example
     * 192.0.2.1
     */
    value?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleDataDnsConflict extends $dara.Model {
    /**
     * @remarks
     * Indicates whether automatic override is supported. Valid values: true (the domain name belongs to the current Alibaba Cloud account) and false (the domain name belongs to another account).
     */
    canAutoResolve?: boolean;
    /**
     * @remarks
     * Indicates whether a conflict exists.
     */
    hasConflict?: boolean;
    /**
     * @remarks
     * The user-facing prompt message. The message varies based on the scenario.
     *
     * @example
     * The domain name www.example.com has a conflicting DNS record (A 192.0.2.1). Delete the conflicting record at your DNS provider and try again
     */
    message?: string;
    /**
     * @remarks
     * The list of conflicting DNS records.
     */
    records?: ListAppInstanceDomainsResponseBodyModuleDataDnsConflictRecords[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleDataMigration extends $dara.Model {
    /**
     * @remarks
     * The migration status. Valid values: NOT_STARTED, IN_PROGRESS, and COMPLETED.
     *
     * @example
     * IN_PROGRESS
     */
    migrationStatus?: string;
    /**
     * @remarks
     * The complete status of the domain name before migration. The structure is the same as the current domain name DTO, allowing the frontend to reuse the rendering logic.
     *
     * @example
     * {"DomainName":"www.example.com","DomainType":"CUSTOM","DeployType":"CDN"}
     */
    previousDomain?: any;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleDataOwnership extends $dara.Model {
    /**
     * @remarks
     * The account owner type. Valid values: CURRENT and OTHER.
     *
     * @example
     * 1813244684017878
     */
    account?: string;
    /**
     * @remarks
     * The registrar type. Valid values: ALIYUN and OTHER.
     *
     * @example
     * ROS
     */
    provider?: string;
    /**
     * @remarks
     * The name of the root domain name corresponding to the domain name.
     *
     * @example
     * tjouya.cn
     */
    rootDomain?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleDataQualification extends $dara.Model {
    /**
     * @remarks
     * The ICP entity filing number.
     *
     * @example
     * Zhe ICP No. 123456
     */
    icpRecordNumber?: string;
    /**
     * @remarks
     * The ICP website filing number.
     *
     * @example
     * Zhe ICP No. 123456-1
     */
    icpSiteRecordNumber?: string;
    /**
     * @remarks
     * The public security filing number.
     *
     * @example
     * Public Security Filing No. 11040102700048
     */
    policeRecordNumber?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord extends $dara.Model {
    /**
     * @remarks
     * The host record.
     *
     * @example
     * portal-dev.bambulab.net
     */
    host?: string;
    /**
     * @remarks
     * The record type.
     *
     * @example
     * 1
     */
    recordType?: string;
    /**
     * @remarks
     * The record value.
     *
     * @example
     * Maintenance
     */
    value?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleDataResolution extends $dara.Model {
    /**
     * @remarks
     * The DNS record information.
     */
    dnsRecord?: ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * code: 400, invalid unionId request id: 09CC0F8B-49C2-7EFB-81E8-9AEF49068D02
     */
    errorMsg?: string;
    /**
     * @remarks
     * The domain name resolution status.
     *
     * @example
     * SUCCESSFUL
     */
    resolutionStatus?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord extends $dara.Model {
    /**
     * @remarks
     * The host record.
     *
     * @example
     * ${host}
     */
    host?: string;
    /**
     * @remarks
     * The record type.
     *
     * @example
     * 1
     */
    recordType?: string;
    /**
     * @remarks
     * The record value.
     *
     * @example
     * 159.138.94.138
     */
    value?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleDataVerification extends $dara.Model {
    /**
     * @remarks
     * The guide for DNS records to be configured by the user.
     */
    dnsRecord?: ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * code: 400, invalid unionId request id: 2270AB0B-6FD0-7F72-9DC5-7A02B67CBB3B
     */
    errorMsg?: string;
    /**
     * @remarks
     * The ownership verification status.
     *
     * @example
     * SUCCESSFUL
     */
    verificationStatus?: string;
    /**
     * @remarks
     * The ownership verification status.
     *
     * @example
     * NoAliyunServiceRoleForWebsiteBuildPublishAuth
     */
    verificationStatusCode?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleData extends $dara.Model {
    /**
     * @remarks
     * The SSL certificate information of the domain name.
     */
    certificate?: ListAppInstanceDomainsResponseBodyModuleDataCertificate;
    /**
     * @remarks
     * The creation time of the instance. Format: yyyy-MM-dd HH:mm:ss. This parameter is required.
     *
     * @example
     * 1683256054000
     */
    createTime?: string;
    /**
     * @remarks
     * The network hosting type. Valid values: CDN, INDEP_DEPLOY, and ESA_SAAS.
     *
     * @example
     * CDN
     */
    deployType?: string;
    /**
     * @remarks
     * The DNS conflict information. This parameter is returned when resolveStatus is DNS_CONFLICT.
     */
    dnsConflict?: ListAppInstanceDomainsResponseBodyModuleDataDnsConflict;
    /**
     * @remarks
     * The domain name.
     *
     * @example
     * kaibaidu.com
     */
    domainName?: string;
    /**
     * @remarks
     * The domain name management type. Valid values: CUSTOM and PLATFORM_PREFIX.
     *
     * @example
     * CUSTOM
     */
    domainType?: string;
    /**
     * @remarks
     * The ICP filing status of the domain name. Valid values: FILED, NOT_FILED, and NOT_REQUIRED.
     *
     * @example
     * FILED
     */
    icpFilingStatus?: string;
    /**
     * @remarks
     * The domain name migration information. This parameter is returned when a region switch occurs.
     */
    migration?: ListAppInstanceDomainsResponseBodyModuleDataMigration;
    /**
     * @remarks
     * Indicates whether the website is currently offline. This status belongs to the application instance, and the value is the same for all domain names under the same instance.
     */
    offline?: boolean;
    /**
     * @remarks
     * The overall binding status.
     *
     * @example
     * ACTIVE
     */
    overallStatus?: string;
    /**
     * @remarks
     * The ownership information of the domain name.
     */
    ownership?: ListAppInstanceDomainsResponseBodyModuleDataOwnership;
    /**
     * @remarks
     * The qualification information of the domain name.
     */
    qualification?: ListAppInstanceDomainsResponseBodyModuleDataQualification;
    /**
     * @remarks
     * www.aliyun.com
     *
     * @example
     * www.aliyun.com
     */
    redirectDomain?: string;
    /**
     * @remarks
     * The domain name resolution information.
     */
    resolution?: ListAppInstanceDomainsResponseBodyModuleDataResolution;
    /**
     * @remarks
     * The domain name verification information.
     */
    verification?: ListAppInstanceDomainsResponseBodyModuleDataVerification;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleNextCertificate extends $dara.Model {
    /**
     * @remarks
     * The certificate name.
     *
     * @example
     * jfztkg202502
     */
    certificateName?: string;
    /**
     * @remarks
     * The certificate status.
     *
     * @example
     * ACTIVE
     */
    certificateStatus?: string;
    /**
     * @remarks
     * The certificate type.
     *
     * @example
     * Server
     */
    certificateType?: string;
    /**
     * @remarks
     * The expiration date of the certificate. The date is in ISO 8601 format and the UTC (Z) time zone.
     *
     * @example
     * 2025-01-15T02:04:00Z
     */
    endTime?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleNextDnsConflictRecords extends $dara.Model {
    /**
     * @remarks
     * The host record.
     *
     * @example
     * www
     */
    host?: string;
    /**
     * @remarks
     * The record type.
     *
     * @example
     * A
     */
    recordType?: string;
    /**
     * @remarks
     * The record value.
     *
     * @example
     * 192.0.2.1
     */
    value?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleNextDnsConflict extends $dara.Model {
    /**
     * @remarks
     * Indicates whether automatic override is supported. Valid values: true (the domain name belongs to the current Alibaba Cloud account) and false (the domain name belongs to another account).
     */
    canAutoResolve?: boolean;
    /**
     * @remarks
     * Indicates whether a conflict exists.
     */
    hasConflict?: boolean;
    /**
     * @remarks
     * The user-facing prompt message. The message varies based on the scenario.
     *
     * @example
     * The domain name www.example.com has a conflicting DNS record (A 192.0.2.1). Delete the conflicting record at your DNS provider and try again
     */
    message?: string;
    /**
     * @remarks
     * The list of conflicting DNS records.
     */
    records?: ListAppInstanceDomainsResponseBodyModuleNextDnsConflictRecords[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleNextMigration extends $dara.Model {
    /**
     * @remarks
     * The migration status. Valid values: NOT_STARTED, IN_PROGRESS, and COMPLETED.
     *
     * @example
     * IN_PROGRESS
     */
    migrationStatus?: string;
    /**
     * @remarks
     * The complete status of the domain name before migration. The structure is the same as the current domain name DTO, allowing the frontend to reuse the rendering logic.
     *
     * @example
     * {"DomainName":"www.example.com","DomainType":"CUSTOM","DeployType":"CDN"}
     */
    previousDomain?: any;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleNextOwnership extends $dara.Model {
    /**
     * @remarks
     * The account owner type. Valid values: CURRENT and OTHER.
     *
     * @example
     * ShisiGavin
     */
    account?: string;
    /**
     * @remarks
     * The registrar type. Valid values: ALIYUN and OTHER.
     *
     * @example
     * pai
     */
    provider?: string;
    /**
     * @remarks
     * The primary domain name.
     *
     * @example
     * example.com
     */
    rootDomain?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleNextQualification extends $dara.Model {
    /**
     * @remarks
     * The ICP entity filing number.
     *
     * @example
     * Zhe ICP No. 123456
     */
    icpRecordNumber?: string;
    /**
     * @remarks
     * The ICP website filing number.
     *
     * @example
     * Zhe ICP No. 123456-1
     */
    icpSiteRecordNumber?: string;
    /**
     * @remarks
     * The public security filing number.
     *
     * @example
     * Public Security Filing No. 11040102700048
     */
    policeRecordNumber?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord extends $dara.Model {
    /**
     * @remarks
     * The host record.
     *
     * @example
     * 172.16.6.1
     */
    host?: string;
    /**
     * @remarks
     * The record type.
     *
     * @example
     * A
     */
    recordType?: string;
    /**
     * @remarks
     * The record value.
     *
     * @example
     * 2025032000000054nuba0r0b0a79y70c1c983tsz09xw9hg3p04kqxmbt4g2p65h
     */
    value?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleNextResolution extends $dara.Model {
    /**
     * @remarks
     * The DNS record information.
     */
    dnsRecord?: ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * aliuid:1133664521498319 assumeOssRole not exist,serviceName:aliyunesarealtimelogpushossrole
     */
    errorMsg?: string;
    /**
     * @remarks
     * The domain name resolution status.
     *
     * @example
     * SUCCESSFUL
     */
    resolutionStatus?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord extends $dara.Model {
    /**
     * @remarks
     * The host record.
     *
     * @example
     * www.abc.com
     */
    host?: string;
    /**
     * @remarks
     * The record type.
     *
     * @example
     * 5
     */
    recordType?: string;
    /**
     * @remarks
     * The record value.
     *
     * @example
     * faHuBlyPcodSjBvBJYpm3-9W_cCSowLLQ4zAUyguEGM
     */
    value?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleNextVerification extends $dara.Model {
    /**
     * @remarks
     * The guide for DNS records to be configured by the user.
     */
    dnsRecord?: ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * aliuid:1133664521498319 assumeOssRole not exist,serviceName:aliyunesarealtimelogpushossrole
     */
    errorMsg?: string;
    /**
     * @remarks
     * The ownership verification status.
     *
     * @example
     * SUCCESSFUL
     */
    verificationStatus?: string;
    /**
     * @remarks
     * The verification status code.
     *
     * @example
     * NoAliyunServiceRoleForWebsiteBuildPublishAuth
     */
    verificationStatusCode?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModuleNext extends $dara.Model {
    /**
     * @remarks
     * The SSL certificate information of the domain name.
     */
    certificate?: ListAppInstanceDomainsResponseBodyModuleNextCertificate;
    /**
     * @remarks
     * The creation time of the instance. Format: yyyy-MM-dd HH:mm:ss. This parameter is required.
     *
     * @example
     * 1741572465000
     */
    createTime?: string;
    /**
     * @remarks
     * The network hosting type: CDN / INDEP_DEPLOY / ESA_SAAS.
     *
     * @example
     * CDN
     */
    deployType?: string;
    /**
     * @remarks
     * The DNS conflict information. This parameter is returned when resolveStatus is DNS_CONFLICT.
     */
    dnsConflict?: ListAppInstanceDomainsResponseBodyModuleNextDnsConflict;
    /**
     * @remarks
     * The domain name.
     *
     * @example
     * usdcoin.xin
     */
    domainName?: string;
    /**
     * @remarks
     * The domain name management type: CUSTOM / PLATFORM_PREFIX.
     *
     * @example
     * CUSTOM
     */
    domainType?: string;
    /**
     * @remarks
     * The ICP filing status of the domain name. Valid values: FILED, NOT_FILED, and NOT_REQUIRED.
     *
     * @example
     * FILED
     */
    icpFilingStatus?: string;
    /**
     * @remarks
     * The domain name migration information. This parameter is returned when a region switch occurs.
     */
    migration?: ListAppInstanceDomainsResponseBodyModuleNextMigration;
    /**
     * @remarks
     * Indicates whether the website is currently offline. This status belongs to the application instance, and the value is the same for all domain names under the same instance.
     */
    offline?: boolean;
    /**
     * @remarks
     * The overall binding status.
     *
     * @example
     * ACTIVE
     */
    overallStatus?: string;
    /**
     * @remarks
     * The ownership information of the domain name.
     */
    ownership?: ListAppInstanceDomainsResponseBodyModuleNextOwnership;
    /**
     * @remarks
     * The qualification information of the domain name.
     */
    qualification?: ListAppInstanceDomainsResponseBodyModuleNextQualification;
    /**
     * @remarks
     * The domain name resolution information.
     */
    resolution?: ListAppInstanceDomainsResponseBodyModuleNextResolution;
    /**
     * @remarks
     * The domain name verification information.
     */
    verification?: ListAppInstanceDomainsResponseBodyModuleNextVerification;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    currentPageNum?: number;
    /**
     * @remarks
     * The request result.
     */
    data?: ListAppInstanceDomainsResponseBodyModuleData[];
    /**
     * @remarks
     * The decision weight.
     */
    next?: ListAppInstanceDomainsResponseBodyModuleNext;
    /**
     * @remarks
     * Indicates whether a next page exists.
     */
    nextPage?: boolean;
    /**
     * @remarks
     * The page size.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * Indicates whether a previous page exists.
     */
    prePage?: boolean;
    /**
     * @remarks
     * In addition to the pagination limit, the server processes a maximum of the latest 1,000 records for the current query. If the number of results exceeds 1,000, **ResultLimit** is **true**. Narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
     */
    resultLimit?: boolean;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 0
     */
    totalItemNum?: number;
    /**
     * @remarks
     * The total number of pages.
     *
     * @example
     * 1
     */
    totalPageNum?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAppInstanceDomainsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason for the access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Indicates whether a retry is allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The application name.
     *
     * @example
     * dewuApp
     */
    appName?: string;
    /**
     * @remarks
     * The dynamic error code.
     *
     * @example
     * ERROR-oo1
     */
    dynamicCode?: string;
    /**
     * @remarks
     * The dynamic error message, which is used to replace `%s` in the **ErrMessage** response parameter.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
     *
     * @example
     * SYSTEM_ERROR
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The returned error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The number of entries to return for a single query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The response data.
     */
    module?: ListAppInstanceDomainsResponseBodyModule;
    /**
     * @remarks
     * The token used to start the next query. If no next query is available, this value is empty.
     *
     * @example
     * dw+qdTi1EjVSWX/INJdYNw==
     */
    nextToken?: string;
    /**
     * @remarks
     * The unique identifier of the request.
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
     */
    requestId?: string;
    /**
     * @remarks
     * The error code.
     *
     * @example
     * SYSTEM.ERROR
     */
    rootErrorCode?: string;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * System error
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * True
     */
    synchro?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
