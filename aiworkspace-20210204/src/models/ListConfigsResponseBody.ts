// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigsResponseBodyConfigsLabels extends $dara.Model {
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

export class ListConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The key of the configuration item. The following keys are supported:
   * 
   * - tempStoragePath: The path for temporary storage. This key is valid only when CategoryName is set to CommonResourceConfig.
   * 
   * - isAutoRecycle: The automatic recycling configuration. This key is valid only when CategoryName is set to DLCAutoRecycle.
   * 
   * - priorityConfig: The priority configuration. This key is valid only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * 
   * - quotaMaximumDuration: The configuration for the maximum runtime of a DLC task in a quota. This key is valid only when CategoryName is set to QuotaMaximumDuration.
   * 
   * - predefinedTags: The predefined labels for the workspace. Resources that you create must have these labels.
   * 
   * @example
   * tempTableLifecycle
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
   * The list of labels for the configuration item.
   */
  labels?: ListConfigsResponseBodyConfigsLabels[];
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      configValue: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': ListConfigsResponseBodyConfigsLabels },
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

export class ListConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of configuration items.
   */
  configs?: ListConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A******C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListConfigsResponseBodyConfigs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

