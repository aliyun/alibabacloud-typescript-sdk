// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActivationCodesResponseBodyItems extends $dara.Model {
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
   * 2054-10-16 16:46:20
   */
  expireAt?: string;
  /**
   * @remarks
   * The time when the activation code was generated.
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
   * The activation code ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The media access control (MAC) address used in the generation of the activation code.
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
   * The unique identifier of the database.
   * 
   * @example
   * 1234567890123456
   */
  systemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      activateAt: 'ActivateAt',
      description: 'Description',
      expireAt: 'ExpireAt',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      macAddress: 'MacAddress',
      name: 'Name',
      systemIdentifier: 'SystemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateAt: 'string',
      description: 'string',
      expireAt: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      macAddress: 'string',
      name: 'string',
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

