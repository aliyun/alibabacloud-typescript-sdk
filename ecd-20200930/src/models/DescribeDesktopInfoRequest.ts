// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopInfoRequest extends $dara.Model {
  businessChannel?: string;
  /**
   * @remarks
   * Desktop ID. Set 1 to 100.
   */
  desktopId?: string[];
  needExtraInfo?: boolean;
  /**
   * @remarks
   * Region ID. Call [](t2167755.xdita#)to get a list of regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      desktopId: 'DesktopId',
      needExtraInfo: 'NeedExtraInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      needExtraInfo: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

