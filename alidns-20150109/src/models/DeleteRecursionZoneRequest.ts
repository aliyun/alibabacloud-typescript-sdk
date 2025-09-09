// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRecursionZoneRequest extends $dara.Model {
  /**
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @example
   * 169783221000012
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

