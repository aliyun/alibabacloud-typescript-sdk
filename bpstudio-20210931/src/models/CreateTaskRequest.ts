// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * JXT3MLZJ56**65D6
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * P3KTG43SW7**6A17I
   */
  processId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  taskName?: string;
  variables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      processId: 'ProcessId',
      taskName: 'TaskName',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      processId: 'string',
      taskName: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

