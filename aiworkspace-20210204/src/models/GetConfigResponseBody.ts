// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigResponseBodyLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The classification of the configuration item. The following classifications are supported:
   * 
   * - CommonResourceConfig: common resource configurations
   * 
   * - DLCAutoRecycle: automatic DLC resource recycling
   * 
   * - DLCPriorityConfig: DLC priority settings
   * 
   * - DSWPriorityConfig: DSW priority settings
   * 
   * - QuotaMaximumDuration: the maximum runtime of a DLC task for a quota
   * 
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
   * - tempStoragePath: the temporary storage path. This key applies only when CategoryName is CommonResourceConfig.
   * 
   * - isAutoRecycle: the automatic recycling configuration. This key applies only when CategoryName is DLCAutoRecycle.
   * 
   * - priorityConfig: the priority configuration. This key applies only when CategoryName is DLCPriorityConfig or DSWPriorityConfig.
   * 
   * - quotaMaximumDuration: the maximum runtime of a DLC task for a quota. This key applies only when CategoryName is QuotaMaximumDuration.
   * 
   * - predefinedTags: the predefined tags for the workspace. Resources that you create must have tags.
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
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The list of tags for the configuration item.
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

