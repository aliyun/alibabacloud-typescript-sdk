// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetRefreshTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration type. Valid values:
   * - **0**: host refresh task
   * - **1**: cloud service refresh task
   * - **2**: AccessKey scheduled verification task.
   * 
   * @example
   * 2
   */
  refreshConfigType?: number;
  /**
   * @remarks
   * The region of the Security Center instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the AccessKey record specified when querying an AccessKey scheduled verification task.
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

