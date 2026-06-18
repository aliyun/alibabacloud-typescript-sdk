// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSwitchDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The endpoint of the primary node of the target instance.
   * 
   * @example
   * pxc-*********.polarx.rds.aliyuncs.com
   */
  dstMainConnectString?: string;
  /**
   * @remarks
   * The port number of the target instance.
   * 
   * @example
   * 3313
   */
  dstMainPort?: string;
  /**
   * @remarks
   * Specifies whether to modify the endpoint or port of the source or target instance.
   * 
   * @example
   * true
   */
  isModifyEndpoint?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the import task.
   * 
   * This parameter is required.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  /**
   * @remarks
   * The endpoint of the primary node of the source instance, which is typically the internal or public endpoint of the instance.
   * 
   * @example
   * rm-*********.mysql.rds.aliyuncs.com
   */
  srcMainConnectString?: string;
  /**
   * @remarks
   * The port number of the primary node of the source instance.
   * 
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

