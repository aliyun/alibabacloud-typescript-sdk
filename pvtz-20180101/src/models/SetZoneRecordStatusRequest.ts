// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetZoneRecordStatusRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. The client generates this value. The value must be unique among different requests and can be up to 64 ASCII characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * The default value is en.
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
   * The status of the DNS record. Valid values:
   * 
   * - ENABLE: Enables DNS resolution.
   * 
   * - DISABLE: Pauses DNS resolution.
   * 
   * This parameter is required.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The client IP address.
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

