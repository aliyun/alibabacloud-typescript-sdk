// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequest extends $dara.Model {
  /**
   * @example
   * job-38860977107324****
   */
  contactId?: string;
  context?: string;
  /**
   * @example
   * 51e155ce-3747-4f21-b402-13c69597b920
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
   * @example
   * CHAT
   */
  source?: string;
  /**
   * @example
   * e9e4c76c-948d-4a6e-9ce2-9da0f5967a73
   */
  templateId?: string;
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

