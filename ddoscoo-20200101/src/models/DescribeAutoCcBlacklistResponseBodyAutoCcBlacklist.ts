// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist extends $dara.Model {
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 192.0.XX.XX
   */
  destIp?: string;
  /**
   * @remarks
   * The validity period of the IP address in the blacklist. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1584093569
   */
  endTime?: number;
  /**
   * @remarks
   * The IP address in the blacklist.
   * 
   * @example
   * 47.100.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The mode of how the IP address is added to the blacklist. Valid values:
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

