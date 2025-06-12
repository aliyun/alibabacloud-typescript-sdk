// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTicketRequest extends $dara.Model {
  context?: string;
  /**
   * @example
   * 51e155ce-***-****-b402-13c69597b920
   */
  customerId?: string;
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
   * 5491d3b4-14ee-4341-b5f1-db2c78beddeb
   */
  ticketId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      customerId: 'CustomerId',
      instanceId: 'InstanceId',
      ticketId: 'TicketId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      customerId: 'string',
      instanceId: 'string',
      ticketId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

