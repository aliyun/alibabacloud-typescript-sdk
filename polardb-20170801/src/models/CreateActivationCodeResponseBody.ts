// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActivationCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the activation code takes effect.
   * 
   * @example
   * 2024-10-16 16:46:20
   */
  activateAt?: string;
  /**
   * @remarks
   * The content of the activation code. Decode this Base64-encoded content and save it to the \\`license.lic\\` file. PolarDB reads this file on startup.
   * 
   * @example
   * AAEAA******AAA=
   */
  certContentB64?: string;
  /**
   * @remarks
   * The description of the activation code.
   * 
   * @example
   * testCode
   */
  description?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2054-10-09 16:46:20
   */
  expireAt?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-16 16:46:20
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-10-16 16:46:20
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The MAC address.
   * 
   * @example
   * 12:34:56:78:98:00
   */
  macAddress?: string;
  /**
   * @remarks
   * The name of the activation code.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4CE6DF97-AEA4-484F-906F-C407EE******
   */
  requestId?: string;
  /**
   * @remarks
   * The unique system identifier of the database.
   * 
   * @example
   * 1234567890123456
   */
  systemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      activateAt: 'ActivateAt',
      certContentB64: 'CertContentB64',
      description: 'Description',
      expireAt: 'ExpireAt',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      macAddress: 'MacAddress',
      name: 'Name',
      requestId: 'RequestId',
      systemIdentifier: 'SystemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateAt: 'string',
      certContentB64: 'string',
      description: 'string',
      expireAt: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      macAddress: 'string',
      name: 'string',
      requestId: 'string',
      systemIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

