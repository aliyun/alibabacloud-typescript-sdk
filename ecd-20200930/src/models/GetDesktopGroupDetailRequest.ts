// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDesktopGroupDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * Region ID. Call [](t2167755.xdita#)to list regions that support Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
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

