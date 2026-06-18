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
  dstMainConnectString?: string;
  dstMainPort?: string;
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
  srcMainConnectString?: string;
  srcMainPort?: string;
  /**
   * @remarks
   * The switchover mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 常规切换：switch_over
   * 强制切换：fail_over
   */
  switchMode?: string;
  /**
   * @remarks
   * The timeout period of the switchover task. Unit: seconds.
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

