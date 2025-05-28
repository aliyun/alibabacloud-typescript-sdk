// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableZonesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the zone was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the zone was last updated.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the current zone.
   * 
   * @example
   * cn-qingdao-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the current zone.
   * 
   * @example
   * ha-cn-t9b30w902vm_qrs
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      updateTime: 'updateTime',
      zoneId: 'zoneId',
      zoneName: 'zoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

