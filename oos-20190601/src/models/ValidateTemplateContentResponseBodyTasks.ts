// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateTemplateContentResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * (Required) The status of the Ecs instance.
   */
  description?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * foo
   */
  name?: string;
  /**
   * @remarks
   * The outputs of the task.
   * 
   * @example
   * .instanceId
   */
  outputs?: string;
  /**
   * @remarks
   * The properties of the task.
   * 
   * @example
   * {"API": "DescribeInstances","Parameters": {"Status": "{{ Status }}"},"Service": "Ecs"}
   */
  properties?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * ACS::ExecuteAPI
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      outputs: 'Outputs',
      properties: 'Properties',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      outputs: 'string',
      properties: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

