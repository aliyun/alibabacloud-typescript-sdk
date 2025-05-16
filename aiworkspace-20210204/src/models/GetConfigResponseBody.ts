// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConfigResponseBodyLabels } from "./GetConfigResponseBodyLabels";


export class GetConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The category of the configuration item. Valid values:
   * 
   * *   CommonResourceConfig
   * *   DLCAutoRecycle
   * *   DLCPriorityConfig
   * *   DSWPriorityConfig
   * *   QuotaMaximumDuration
   * *   CommonTagConfig
   * 
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The key of the configuration item. Valid values:
   * 
   * *   tempStoragePath: Temporary storage path. This key can be used only when CategoryName is set to CommonResourceConfig.
   * *   isAutoRecycle: Automatic recycle configuration. This key can be used only when CategoryName is set to DLCAutoRecycle.
   * *   priorityConfig: Priority configuration. This key can be used only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * *   quotaMaximumDuration: Maximum run time of DLC jobs for a quota. This key can be used only when CategoryName is set to QuotaMaximumDuration.
   * *   predefinedTags: Predefined tags of the workspace. Created resources must include tags.
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
   * The tags of the configuration item.
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

