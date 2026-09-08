// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCallSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the session.
   * 
   * @example
   * job-522327189435260928
   */
  contactId?: string;
  /**
   * @remarks
   * Summary information
   * 
   * @example
   * {"summaryTitle":"标题","summaryContent":"内容","keywords":"关键信息"}
   */
  context?: string;
  /**
   * @remarks
   * Customer ID
   * 
   * @example
   * 51e155ce-3747-*****-b402-13c69597b920
   */
  customerId?: string;
  /**
   * @remarks
   * Instance ID
   * 
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

