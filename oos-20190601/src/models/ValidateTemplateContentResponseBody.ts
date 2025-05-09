// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ValidateTemplateContentResponseBodyTasks } from "./ValidateTemplateContentResponseBodyTasks";


export class ValidateTemplateContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The outputs of the template.
   * 
   * @example
   * {}
   */
  outputs?: string;
  /**
   * @remarks
   * The parameters of the template.
   * 
   * @example
   * { "Status": { "Description": "(Required) The status of the Ecs instance.", "Type": "String" } }
   */
  parameters?: string;
  /**
   * @remarks
   * The RAM role.
   * 
   * @example
   * OOSServiceRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D5EE9591-1F2D-573E-8751-7F08BBB388D4
   */
  requestId?: string;
  /**
   * @remarks
   * The task defined in the template.
   */
  tasks?: ValidateTemplateContentResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      parameters: 'Parameters',
      ramRole: 'RamRole',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: 'string',
      parameters: 'string',
      ramRole: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ValidateTemplateContentResponseBodyTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

