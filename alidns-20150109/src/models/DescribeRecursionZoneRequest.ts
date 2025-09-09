// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecursionZoneRequest extends $dara.Model {
  /**
   * @example
   * 169783221000012
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
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

