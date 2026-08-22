// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOpenSearchAccessProtocolRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The access protocol. Valid values:
   * 
   * - **http**: HTTP protocol.
   * - **https**: HTTPS protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * https
   */
  protocol?: string;
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
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      protocol: 'Protocol',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      protocol: 'string',
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

