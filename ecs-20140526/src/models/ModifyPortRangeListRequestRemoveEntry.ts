// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPortRangeListRequestRemoveEntry extends $dara.Model {
  /**
   * @remarks
   * The port range in entry N. Valid values of N: 0 to 200. Take note of the following limits:
   * 
   * *   `PortRange` in different entries cannot be duplicated.
   * *   The value of this parameter cannot be the same as the value of `AddEntry.N.PortRange`.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  static names(): { [key: string]: string } {
    return {
      portRange: 'PortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

