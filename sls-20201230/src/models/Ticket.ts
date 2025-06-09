// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Ticket extends $dara.Model {
  /**
   * @example
   * 1000000000
   */
  callerUid?: number;
  /**
   * @example
   * 2023-09-06 14:57:07
   */
  createDate?: string;
  /**
   * @example
   * 100
   */
  expirationTime?: number;
  /**
   * @example
   * 2023-09-06 14:58:07
   */
  expireDate?: string;
  /**
   * @example
   * {"xx":"yy"}
   */
  extra?: string;
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * 1
   */
  number?: number;
  /**
   * @example
   * {"type":"aliyun","ids":[1,2]}
   */
  sharingTo?: string;
  /**
   * @example
   * xxxxx
   */
  ticket?: string;
  /**
   * @example
   * xxxxx
   */
  ticketId?: string;
  /**
   * @example
   * 1
   */
  usedNumber?: number;
  /**
   * @example
   * false
   */
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      callerUid: 'callerUid',
      createDate: 'createDate',
      expirationTime: 'expirationTime',
      expireDate: 'expireDate',
      extra: 'extra',
      name: 'name',
      number: 'number',
      sharingTo: 'sharingTo',
      ticket: 'ticket',
      ticketId: 'ticketId',
      usedNumber: 'usedNumber',
      valid: 'valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerUid: 'number',
      createDate: 'string',
      expirationTime: 'number',
      expireDate: 'string',
      extra: 'string',
      name: 'string',
      number: 'number',
      sharingTo: 'string',
      ticket: 'string',
      ticketId: 'string',
      usedNumber: 'number',
      valid: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

