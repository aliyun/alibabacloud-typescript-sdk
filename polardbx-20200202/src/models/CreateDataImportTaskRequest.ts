// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataImportTaskRequest extends $dara.Model {
  /**
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @example
   * transfer_test3
   */
  dstDb?: string;
  dstPassword?: string;
  /**
   * @example
   * pxc-shr8****k36vrn
   */
  dstResId?: string;
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
   * transfer_for_st
   */
  srcDb?: string;
  srcPassword?: string;
  /**
   * @example
   * pxc-shrnv****kh87z
   */
  srcResId?: string;
  srcUserName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dstDb: 'DstDb',
      dstPassword: 'DstPassword',
      dstResId: 'DstResId',
      dstUserName: 'DstUserName',
      regionId: 'RegionId',
      slinkTaskId: 'SlinkTaskId',
      srcDb: 'SrcDb',
      srcPassword: 'SrcPassword',
      srcResId: 'SrcResId',
      srcUserName: 'SrcUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dstDb: 'string',
      dstPassword: 'string',
      dstResId: 'string',
      dstUserName: 'string',
      regionId: 'string',
      slinkTaskId: 'string',
      srcDb: 'string',
      srcPassword: 'string',
      srcResId: 'string',
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

