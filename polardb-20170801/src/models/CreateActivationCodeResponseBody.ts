// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActivationCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The effective period.
   * 
   * @example
   * 2024-10-16 16:46:20
   */
  activateAt?: string;
  /**
   * @remarks
   * The content of the activation code. Decode the Base64-encoded content and save it to the license.lic file for PolarDB to read during startup.
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
   * The time when the activation code expires.
   * 
   * @example
   * 2054-10-09 16:46:20
   */
  expireAt?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 2024-10-16 16:46:20
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the activation code was updated.
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
   * The unique identifier of the database, also known as the system identifier.
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

