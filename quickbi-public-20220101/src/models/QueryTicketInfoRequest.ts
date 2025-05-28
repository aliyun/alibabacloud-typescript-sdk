// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTicketInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The value of the bill.
   * 
   * This parameter is required.
   * 
   * @example
   * a27a9aec-****-****-bd40-1a21ea41d7c5
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

