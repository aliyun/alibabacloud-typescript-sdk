// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMongoDBLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the audit log feature is enabled for the ApsaraDB for MongoDB instance.
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enableAudit?: boolean;
  /**
   * @remarks
   * The retention period of hot storage for the V2_Standard (DAS Enterprise Edition (NoSQL-compatible)) version of audit logs. Unit: days.
   * 
   * @example
   * 7
   */
  hotTtlForV2Standard?: number;
  /**
   * @remarks
   * Indicates whether a rule is created to ship audit logs to Logtail. For more information about Logtail, see [What is Logtail?](https://help.aliyun.com/document_detail/28979.html). Valid values:
   * 
   * - **1**: A rule is created.
   * 
   * - **0** or **null**: No rule is created.
   * 
   * @example
   * 1
   */
  isEtlMetaExist?: number;
  /**
   * @remarks
   * Indicates whether a Simple Log Service project for audit logs exists in the current region. Valid values:
   * 
   * - **1**: The project exists.
   * 
   * - **0** or **null**: The project does not exist.
   * 
   * @example
   * 1
   */
  isUserProjectLogstoreExist?: number;
  /**
   * @remarks
   * The maximum storage capacity for the official version of audit logs. A value of -1 indicates that no upper limit is set.
   * 
   * @example
   * -1
   */
  preserveStorageForStandard?: number;
  /**
   * @remarks
   * The maximum storage capacity for the free trial version of audit logs. Unit: bytes. The maximum value is 107374182400 bytes.
   * 
   * @example
   * 107374182400
   */
  preserveStorageForTrail?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 664ECE26-658A-47C5-88F6-870B0132E8D2
   */
  requestId?: string;
  /**
   * @remarks
   * The version of the audit log feature.
   * 
   * - **Trial**: Free trial version.
   * 
   * - **Standard**: Official version.
   * 
   * - **V2_Standard**: DAS Enterprise Edition (NoSQL-compatible) version.
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The retention period of audit logs for the official version. The value ranges from 1 to 365. Unit: days.
   * 
   * @example
   * 30
   */
  ttlForStandard?: number;
  /**
   * @remarks
   * The retention period of audit logs for the free trial version. Unit: days.
   * 
   * @example
   * 1
   */
  ttlForTrail?: number;
  /**
   * @remarks
   * The retention period of cold storage for the V2_Standard (DAS Enterprise Edition (NoSQL-compatible)) version of audit logs. Unit: days.
   * 
   * @example
   * 30
   */
  ttlForV2Standard?: number;
  /**
   * @remarks
   * The storage capacity that is used by audit logs for the official version. Unit: bytes.
   * 
   * @example
   * 20163
   */
  usedStorageForStandard?: number;
  /**
   * @remarks
   * The storage capacity that is used by audit logs for the free trial version. Unit: bytes.
   * 
   * @example
   * 12548178759
   */
  usedStorageForTrail?: number;
  /**
   * @remarks
   * The name of the Simple Log Service project for the audit logs.
   * 
   * @example
   * nosql-176498472570****-cn-hangzhou
   */
  userProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      enableAudit: 'EnableAudit',
      hotTtlForV2Standard: 'HotTtlForV2Standard',
      isEtlMetaExist: 'IsEtlMetaExist',
      isUserProjectLogstoreExist: 'IsUserProjectLogstoreExist',
      preserveStorageForStandard: 'PreserveStorageForStandard',
      preserveStorageForTrail: 'PreserveStorageForTrail',
      requestId: 'RequestId',
      serviceType: 'ServiceType',
      ttlForStandard: 'TtlForStandard',
      ttlForTrail: 'TtlForTrail',
      ttlForV2Standard: 'TtlForV2Standard',
      usedStorageForStandard: 'UsedStorageForStandard',
      usedStorageForTrail: 'UsedStorageForTrail',
      userProjectName: 'UserProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAudit: 'boolean',
      hotTtlForV2Standard: 'number',
      isEtlMetaExist: 'number',
      isUserProjectLogstoreExist: 'number',
      preserveStorageForStandard: 'number',
      preserveStorageForTrail: 'number',
      requestId: 'string',
      serviceType: 'string',
      ttlForStandard: 'number',
      ttlForTrail: 'number',
      ttlForV2Standard: 'number',
      usedStorageForStandard: 'number',
      usedStorageForTrail: 'number',
      userProjectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

