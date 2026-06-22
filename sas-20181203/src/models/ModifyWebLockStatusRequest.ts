// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for requests and responses. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 125.71.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The protection status of the server. Valid values:
   * - **on**: Enables protection.
   * - **off**: Shuts down protection.    
   * 
   * > After you shut down web tamper-proofing for the server, a tamper-proofing authorization quota is released.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the server for which you want to modify the brute-force attacks prevention status.
   * You can invoke the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain the UUID of the server.
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

