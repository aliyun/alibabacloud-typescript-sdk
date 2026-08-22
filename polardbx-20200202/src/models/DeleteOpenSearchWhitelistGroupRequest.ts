// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOpenSearchWhitelistGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-**************
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * group_y6sqhtr6jyu52w4oublg3674du
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      groupId: 'string',
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

