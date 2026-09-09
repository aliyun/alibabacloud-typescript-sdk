// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Ticket extends $dara.Model {
  /**
   * @remarks
   * The UID of the caller when the ticket was created.
   * 
   * @example
   * 1000000000
   */
  callerUid?: number;
  /**
   * @remarks
   * The time when the ticket was created.
   * 
   * @example
   * 2023-09-06 14:57:07
   */
  createDate?: string;
  /**
   * @remarks
   * The expiration time of the ticket, in seconds.
   * 
   * @example
   * 100
   */
  expirationTime?: number;
  /**
   * @remarks
   * The expiration time of the ticket.
   * 
   * @example
   * 2023-09-06 14:58:07
   */
  expireDate?: string;
  /**
   * @remarks
   * The extension field.
   * 
   * @example
   * {"xx":"yy"}
   */
  extra?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Test
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of times the ticket can be used.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The target to which the ticket is shared.
   * 
   * @example
   * {"type":"aliyun","ids":[1,2]}
   */
  sharingTo?: string;
  /**
   * @remarks
   * ticket
   * 
   * @example
   * xxxxx
   */
  ticket?: string;
  /**
   * @remarks
   * The unique ID of the ticket.
   * 
   * @example
   * xxxxx
   */
  ticketId?: string;
  /**
   * @remarks
   * The number of times the ticket has been used.
   * 
   * @example
   * 1
   */
  usedNumber?: number;
  /**
   * @remarks
   * Indicates whether the ticket is disabled.
   * 
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

