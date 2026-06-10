// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of 1 to 100 cloud computer IDs.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The region ID. Call [](t2167755.xdita#)to get a list of regions that Elastic Desktop Service (EDS) supports.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resellerOwnerUid: 'number',
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

