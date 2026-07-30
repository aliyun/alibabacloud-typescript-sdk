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
   * @example
   * wc-95******o36ylr
   */
  configId?: string;
  /**
   * @remarks
   * The key of the configuration item. The following keys are supported:
   * 
   * - tempStoragePath: temporary storage path. This ConfigKey can be used only when CategoryName is set to CommonResourceConfig.
   * - isAutoRecycle: automatic reclamation configuration. This ConfigKey can be used only when CategoryName is set to DLCAutoRecycle.
   * - priorityConfig: priority configuration. This ConfigKey can be used only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * - quotaMaximumDuration: maximum runtime duration configuration for DLC jobs in a quota. This ConfigKey can be used only when CategoryName is set to QuotaMaximumDuration.
   * - predefinedTags: preset tags for the workspace. Resources that are created must include these tags.
   * 
   * @example
   * tempTableLifecycle
   */
  configKey?: string;
  /**
   * @remarks
   * The configuration value.
   * 
   * @example
   * oss://***
   */
  configValue?: string;
  /**
   * @remarks
   * The UTC time when the configuration item was created.
   * 
   * @example
   * 2026-05-12T07:59:41.000Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The UTC time when the configuration item was last modified.
   * 
   * @example
   * 2026-07-28T03:44:10.000Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The list of labels for the configuration item.
   */
  labels?: ListConfigsResponseBodyConfigsLabels[];
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
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
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A******C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned configuration items.
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

