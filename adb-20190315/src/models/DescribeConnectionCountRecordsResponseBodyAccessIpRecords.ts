// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConnectionCountRecordsResponseBodyAccessIpRecords extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 42.120.XX.XX
   */
  accessIp?: string;
  /**
   * @remarks
   * The number of connections.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

