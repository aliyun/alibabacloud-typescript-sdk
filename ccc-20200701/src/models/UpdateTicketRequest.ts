// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The ticket form information.
   * 
   * @example
   * {"productName":"玩具1"}
   */
  context?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 51e155ce-***-****-b402-13c69597b920
   */
  customerId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5491d3b4-14ee-4341-b5f1-db2c78beddeb
   */
  ticketId?: string;
  /**
   * @remarks
   * The ticket title.
   * 
   * @example
   * 标题
   */
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

