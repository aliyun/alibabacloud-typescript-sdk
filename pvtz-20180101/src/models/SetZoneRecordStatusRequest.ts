// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetZoneRecordStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * 207541****
   */
  recordId?: number;
  /**
   * @remarks
   * The state of the DNS record. Valid values:
   * 
   * *   ENABLE: enables the DNS record.
   * *   DISABLE: suspends the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * DISABLE
   */
  status?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.XX.XX
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      recordId: 'RecordId',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      recordId: 'number',
      status: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

