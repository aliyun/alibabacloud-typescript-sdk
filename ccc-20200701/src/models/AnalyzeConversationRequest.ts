// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeConversationRequest extends $dara.Model {
  /**
   * @example
   * job-10963442671187****
   */
  contactId?: string;
  fieldListJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9cfad875-6260-4a53-ab6e-b13e3fb31f7d
   */
  instanceId?: string;
  /**
   * @example
   * ["keywords"]
   */
  taskListJson?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      fieldListJson: 'FieldListJson',
      instanceId: 'InstanceId',
      taskListJson: 'TaskListJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      fieldListJson: 'string',
      instanceId: 'string',
      taskListJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

