// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigResponseBodyLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the label.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The category of the configuration item. The following categories are supported:
   * 
   * - CommonResourceConfig: common resource configuration
   * - DLCAutoRecycle: DLC automatic reclamation
   * - DLCPriorityConfig: DLC priority settings
   * - DSWPriorityConfig: DSW priority settings
   * - QuotaMaximumDuration: maximum runtime duration configuration for DLC jobs in a quota
   * - CommonTagConfig: tag settings
   * 
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The key of the configuration item. The following keys are supported:
   * 
   * - tempStoragePath: the temporary storage path. This key is valid only when CategoryName is set to CommonResourceConfig.
   * - isAutoRecycle: the automatic reclamation configuration. This key is valid only when CategoryName is set to DLCAutoRecycle.
   * - priorityConfig: the priority configuration. This key is valid only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * - quotaMaximumDuration: the maximum runtime duration configuration for DLC jobs in a quota. This key is valid only when CategoryName is set to QuotaMaximumDuration.
   * - predefinedTags: the preset tags for the workspace. Resources created in the workspace must include these tags.
   * 
   * @example
   * tempStoragePath
   */
  configKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * oss://***
   */
  configValue?: string;
  /**
   * @remarks
   * The time when the configuration item was created, in UTC.
   * 
   * @example
   * 2026-07-17T06:53:04.000Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the configuration item was last modified, in UTC.
   * 
   * @example
   * 2026-07-17T06:55:04.000Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The list of labels for the configuration item.
   */
  labels?: GetConfigResponseBodyLabels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A******C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1234******2
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKey: 'string',
      configValue: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': GetConfigResponseBodyLabels },
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

