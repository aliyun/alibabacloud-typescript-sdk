// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCallSummaryRequest extends $dara.Model {
  /**
   * @example
   * job-522327189435260928
   */
  contactId?: string;
  context?: string;
  /**
   * @example
   * 51e155ce-3747-*****-b402-13c69597b920
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
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      context: 'Context',
      customerId: 'CustomerId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      context: 'string',
      customerId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

