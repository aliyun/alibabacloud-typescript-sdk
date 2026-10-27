// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchGdnMemberRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the primary instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
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
   * The port number of the primary node of the target instance.
   * 
   * @example
   * 3313
   */
  dstMainPort?: string;
  /**
   * @remarks
   * Specifies whether the endpoint and port of the source or target instance is simultaneously modified.
   * 
   * @example
   * true
   */
  isModifyEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint of the primary node of the source instance.
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
  /**
   * @remarks
   * The switchover mode.
   * 
   * This parameter is required.
   * 
   * @example
   * Normal switchover: switch_over
   * Forced switchover: fail_over
   */
  switchMode?: string;
  /**
   * @remarks
   * The timeout period for the switchover task, in seconds.
   * 
   * @example
   * 10
   */
  taskTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dstMainConnectString: 'DstMainConnectString',
      dstMainPort: 'DstMainPort',
      isModifyEndpoint: 'IsModifyEndpoint',
      regionId: 'RegionId',
      srcMainConnectString: 'SrcMainConnectString',
      srcMainPort: 'SrcMainPort',
      switchMode: 'SwitchMode',
      taskTimeout: 'TaskTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dstMainConnectString: 'string',
      dstMainPort: 'string',
      isModifyEndpoint: 'string',
      regionId: 'string',
      srcMainConnectString: 'string',
      srcMainPort: 'string',
      switchMode: 'string',
      taskTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

