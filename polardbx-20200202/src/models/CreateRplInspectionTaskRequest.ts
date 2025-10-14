// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRplInspectionTaskRequest extends $dara.Model {
  /**
   * @example
   * transfer_test3
   */
  dstDb?: string;
  /**
   * @example
   * ******
   */
  dstPassword?: string;
  /**
   * @example
   * pxc-zkrc1****l54rc
   */
  dstResId?: string;
  /**
   * @example
   * bbt_item
   */
  dstUserName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  /**
   * @example
   * ******
   */
  srcPassword?: string;
  /**
   * @example
   * bbt_ump
   */
  srcUserName?: string;
  static names(): { [key: string]: string } {
    return {
      dstDb: 'DstDb',
      dstPassword: 'DstPassword',
      dstResId: 'DstResId',
      dstUserName: 'DstUserName',
      regionId: 'RegionId',
      slinkTaskId: 'SlinkTaskId',
      srcPassword: 'SrcPassword',
      srcUserName: 'SrcUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstDb: 'string',
      dstPassword: 'string',
      dstResId: 'string',
      dstUserName: 'string',
      regionId: 'string',
      slinkTaskId: 'string',
      srcPassword: 'string',
      srcUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

