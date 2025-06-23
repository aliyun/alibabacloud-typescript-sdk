// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDestinationPortEventResponseBodyPortList extends $dara.Model {
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  dstPort?: string;
  /**
   * @remarks
   * The number of request packets received by the destination port.
   * 
   * @example
   * 8760950
   */
  inPkts?: number;
  static names(): { [key: string]: string } {
    return {
      dstPort: 'DstPort',
      inPkts: 'InPkts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPort: 'string',
      inPkts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

