// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetRefreshTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the configuration. Valid values:
   * 
   * *   **0**: server synchronization task
   * *   **1**: cloud service synchronization task
   * *   **2**: scheduled AccessKey pair verification task
   * 
   * @example
   * 2
   */
  refreshConfigType?: number;
  /**
   * @remarks
   * The region where the Security Center instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the data entry containing the AccessKey pair that you specify when you configure the scheduled AccessKey pair verification task.
   * 
   * @example
   * 2295
   */
  targetId?: number;
  static names(): { [key: string]: string } {
    return {
      refreshConfigType: 'RefreshConfigType',
      regionId: 'RegionId',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshConfigType: 'number',
      regionId: 'string',
      targetId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

