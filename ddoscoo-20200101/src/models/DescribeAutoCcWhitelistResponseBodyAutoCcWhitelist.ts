// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.***.***.117
   */
  destIp?: string;
  /**
   * @remarks
   * The validity period of the IP address in the whitelist. Unit: seconds. **0** indicates that the IP address in the whitelist never expires.
   * 
   * @example
   * 0
   */
  endTime?: number;
  /**
   * @remarks
   * The IP addresses that is contained in the IP address whitelist.
   * 
   * @example
   * 2.2.2.2
   */
  sourceIp?: string;
  /**
   * @remarks
   * The mode of how an IP address is added to the whitelist. Valid values:
   * 
   * *   **manual**: manually added
   * *   **auto**: automatically added
   * 
   * @example
   * manual
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      destIp: 'DestIp',
      endTime: 'EndTime',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destIp: 'string',
      endTime: 'number',
      sourceIp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

