// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSwitchDatabaseRequest extends $dara.Model {
  /**
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @example
   * pxc-*********.polarx.rds.aliyuncs.com
   */
  dstMainConnectString?: string;
  /**
   * @example
   * 3313
   */
  dstMainPort?: string;
  /**
   * @example
   * true
   */
  isModifyEndpoint?: string;
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
   * rm-*********.mysql.rds.aliyuncs.com
   */
  srcMainConnectString?: string;
  /**
   * @example
   * 3308
   */
  srcMainPort?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dstMainConnectString: 'DstMainConnectString',
      dstMainPort: 'DstMainPort',
      isModifyEndpoint: 'IsModifyEndpoint',
      regionId: 'RegionId',
      slinkTaskId: 'SlinkTaskId',
      srcMainConnectString: 'SrcMainConnectString',
      srcMainPort: 'SrcMainPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dstMainConnectString: 'string',
      dstMainPort: 'string',
      isModifyEndpoint: 'string',
      regionId: 'string',
      slinkTaskId: 'string',
      srcMainConnectString: 'string',
      srcMainPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

