// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPortRangeListRequestAddEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the port range in entry N. The description must be 2 to 32 characters in length and cannot start with http:// or https://. Valid values of N: 0 to 200.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The port range in entry N. Valid values of N: 0 to 200. Take note of the following limits:
   * 
   * *   The total number of entries in the port list cannot exceed the `MaxEntries` value.
   * *   `PortRange` in different entries cannot be duplicated.
   * *   The value of this parameter cannot be the same as the value of `RemoveEntry.N.PortRange`.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      portRange: 'PortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

