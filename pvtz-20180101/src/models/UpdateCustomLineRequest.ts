// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomLineRequest extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR blocks.
   * 
   * This parameter is required.
   */
  ipv4s?: string[];
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * This parameter is required.
   * 
   * @example
   * 100003
   */
  lineId?: string;
  /**
   * @remarks
   * The name of the custom line.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4s: 'Ipv4s',
      lang: 'Lang',
      lineId: 'LineId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4s: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      lineId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4s)) {
      $dara.Model.validateArray(this.ipv4s);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

