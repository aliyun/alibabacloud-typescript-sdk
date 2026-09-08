// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the call.
   * 
   * @example
   * job-38860977107324****
   */
  contactId?: string;
  /**
   * @remarks
   * Ticket field information.
   * 
   * @example
   * {"productName":"玩具1"}
   */
  context?: string;
  /**
   * @remarks
   * Customer ID, the customer ID in Cloud Contact Center customer profiles.
   * 
   * @example
   * 51e155ce-3747-4f21-b402-13c69597b920
   */
  customerId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Ticket source.
   * 
   * @example
   * CHAT
   */
  source?: string;
  /**
   * @remarks
   * Ticket template ID.
   * 
   * @example
   * e9e4c76c-948d-4a6e-9ce2-9da0f5967a73
   */
  templateId?: string;
  /**
   * @remarks
   * Ticket title.
   * 
   * @example
   * 售后工单。
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      context: 'Context',
      customerId: 'CustomerId',
      instanceId: 'InstanceId',
      source: 'Source',
      templateId: 'TemplateId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      context: 'string',
      customerId: 'string',
      instanceId: 'string',
      source: 'string',
      templateId: 'string',
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

