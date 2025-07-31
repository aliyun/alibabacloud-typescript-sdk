// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMongoDBLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to enable the audit log feature.
   * 
   * *   **true**: The audit log feature is enabled.
   * *   **false**: The audit log feature is disabled.
   * 
   * @example
   * true
   */
  enableAudit?: boolean;
  /**
   * @remarks
   * Indicates whether a rule to distribute logs to Logtail is created. For more information, see [Logtail overview](https://help.aliyun.com/document_detail/28979.html). Valid values:
   * 
   * *   **1**: A rule to distribute logs to Logtail is created.
   * *   **0** or **null**: A rule to distribute logs to Logtail is not created.
   * 
   * @example
   * 1
   */
  isEtlMetaExist?: number;
  /**
   * @remarks
   * Indicates whether a project exists in the current region. Valid values:
   * 
   * *   **1**: A logging project exists in the current region.
   * *   **0** or **null**: A logging project does not exist in the current region.
   * 
   * @example
   * 1
   */
  isUserProjectLogstoreExist?: number;
  /**
   * @remarks
   * The maximum storage capacity for the formal edition of the audit log feature. If the value is -1, no maximum storage capacity is set.
   * 
   * @example
   * -1
   */
  preserveStorageForStandard?: number;
  /**
   * @remarks
   * The maximum storage capacity for the free trial edition of the audit log feature. Unit: bytes. You can set the maximum storage capacity to 107,374,182,400 bytes.
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
   * The type of the audit log feature. Valid values:
   * 
   * *   **Trail**: the free trial edition
   * *   **Standard**: the official edition
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The retention period for the official edition of the audit log feature. Valid values: 1 to 365. Unit: day.
   * 
   * @example
   * 30
   */
  ttlForStandard?: number;
  /**
   * @remarks
   * The retention period for the free trial edition of the audit log feature.
   * 
   * @example
   * 1
   */
  ttlForTrail?: number;
  /**
   * @remarks
   * The used storage capacity for the formal edition of the audit log feature. Unit: bytes.
   * 
   * @example
   * 20163
   */
  usedStorageForStandard?: number;
  /**
   * @remarks
   * The used storage capacity for the free trial edition of the audit log feature. Unit: bytes.
   * 
   * @example
   * 12548178759
   */
  usedStorageForTrail?: number;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * nosql-176498472570****-cn-hangzhou
   */
  userProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      enableAudit: 'EnableAudit',
      isEtlMetaExist: 'IsEtlMetaExist',
      isUserProjectLogstoreExist: 'IsUserProjectLogstoreExist',
      preserveStorageForStandard: 'PreserveStorageForStandard',
      preserveStorageForTrail: 'PreserveStorageForTrail',
      requestId: 'RequestId',
      serviceType: 'ServiceType',
      ttlForStandard: 'TtlForStandard',
      ttlForTrail: 'TtlForTrail',
      usedStorageForStandard: 'UsedStorageForStandard',
      usedStorageForTrail: 'UsedStorageForTrail',
      userProjectName: 'UserProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAudit: 'boolean',
      isEtlMetaExist: 'number',
      isUserProjectLogstoreExist: 'number',
      preserveStorageForStandard: 'number',
      preserveStorageForTrail: 'number',
      requestId: 'string',
      serviceType: 'string',
      ttlForStandard: 'number',
      ttlForTrail: 'number',
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

