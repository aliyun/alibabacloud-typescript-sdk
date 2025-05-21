// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZonesResponseBodyDataItems extends $dara.Model {
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
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

