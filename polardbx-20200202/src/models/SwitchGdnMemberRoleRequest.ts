// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchGdnMemberRoleRequest extends $dara.Model {
  /**
   * @remarks
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
   * This parameter is required.
   */
  switchMode?: string;
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

