// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResubmitTicketRequest extends $dara.Model {
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f2c6722b-cd13-442d-bf10-22a07c70d6d5
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      ticketId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

