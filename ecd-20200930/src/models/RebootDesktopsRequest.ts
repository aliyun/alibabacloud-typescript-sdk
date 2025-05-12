// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string[];
  osUpdate?: boolean;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      osUpdate: 'OsUpdate',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      osUpdate: 'boolean',
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

