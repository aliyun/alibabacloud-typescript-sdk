// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZonesResponseBodyDataItems extends $dara.Model {
  supportQat?: string;
  /**
   * @remarks
   * 可用区ID。
   * 
   * @example
   * cn-shenzhen-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      supportQat: 'supportQat',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportQat: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

