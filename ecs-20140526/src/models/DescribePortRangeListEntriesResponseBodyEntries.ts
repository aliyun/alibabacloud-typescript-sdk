// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortRangeListEntriesResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the port range.
   * 
   * @example
   * Description information of PortRangeList
   */
  description?: string;
  /**
   * @remarks
   * The port range.
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

