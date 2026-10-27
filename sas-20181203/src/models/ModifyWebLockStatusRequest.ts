// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the language of the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 125.71.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * Specifies the protection status of the server. Valid values:
   * - **on**: Enables protection.
   * - **off**: Initiates a shutdown of protection.    
   * 
   * > After you initiate a shutdown of web tamper-proofing for the current server, a tamper-proofing authorization quota is released.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the server for which you want to modify the protection status against brute-force attacks.
   * You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain the UUID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * inet-1234567****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      status: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

