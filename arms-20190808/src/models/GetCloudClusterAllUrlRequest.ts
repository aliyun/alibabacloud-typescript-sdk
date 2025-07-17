// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudClusterAllUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CloudMonitor instance.
   * 
   * @example
   * ca9676014babd4
   */
  clusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

