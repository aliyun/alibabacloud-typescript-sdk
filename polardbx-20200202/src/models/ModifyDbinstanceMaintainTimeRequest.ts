// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceMaintainTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The unique token.
   * 
   * @example
   * 73559800-3c8c-11ec-bd40-99cfcff3fe1e
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-htri0ori2r4k9p
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The maintenance window in UTC. Valid values: 00:00Z-23:59Z.
   * 
   * This parameter is required.
   * 
   * @example
   * 21:00Z-00:00Z
   */
  maintainTime?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceName: 'DBInstanceName',
      maintainTime: 'MaintainTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceName: 'string',
      maintainTime: 'string',
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

