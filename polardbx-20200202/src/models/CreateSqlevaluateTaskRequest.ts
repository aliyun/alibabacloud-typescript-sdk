// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSQLEvaluateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-shr4idrgogti89
   */
  DBInstanceName?: string;
  /**
   * @example
   * transfer_for_st
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
   * drds_test
   */
  dstUserName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * test-drds->auto
   */
  slinkTaskDesc?: string;
  /**
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  /**
   * @example
   * transfer_test3
   */
  srcDb?: string;
  /**
   * @example
   * ******
   */
  srcPassword?: string;
  /**
   * @example
   * pxc-shr****rgkh87z
   */
  srcResId?: string;
  /**
   * @example
   * POLARX2
   */
  srcResType?: string;
  /**
   * @example
   * drds_test
   */
  srcUserName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dstDb: 'DstDb',
      dstPassword: 'DstPassword',
      dstResId: 'DstResId',
      dstUserName: 'DstUserName',
      regionId: 'RegionId',
      slinkTaskDesc: 'SlinkTaskDesc',
      slinkTaskId: 'SlinkTaskId',
      srcDb: 'SrcDb',
      srcPassword: 'SrcPassword',
      srcResId: 'SrcResId',
      srcResType: 'SrcResType',
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
      slinkTaskDesc: 'string',
      slinkTaskId: 'string',
      srcDb: 'string',
      srcPassword: 'string',
      srcResId: 'string',
      srcResType: 'string',
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

