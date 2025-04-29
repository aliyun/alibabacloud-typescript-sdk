// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePortRangeListRequestEntry extends $dara.Model {
  /**
   * @remarks
   * The description of port range N. The description must be 2 to 32 characters in length and cannot start with http:// or https://. Valid values of N: 0 to 200.
   * 
   * @example
   * Description information of Entry
   */
  description?: string;
  /**
   * @remarks
   * Port range N. Valid values of N: 0 to 200.
   * 
   * *   The total number of entries cannot exceed the `MaxEntries` value.
   * *   `PortRange` in multiple entries cannot be duplicated.
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

