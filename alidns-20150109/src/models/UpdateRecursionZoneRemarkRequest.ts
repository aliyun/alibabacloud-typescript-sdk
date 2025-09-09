// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionZoneRemarkRequest extends $dara.Model {
  /**
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  remark?: string;
  /**
   * @example
   * 173671468000011
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      remark: 'Remark',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      remark: 'string',
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

