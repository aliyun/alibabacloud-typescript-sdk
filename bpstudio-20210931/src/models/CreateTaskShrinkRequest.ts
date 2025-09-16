// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskShrinkRequest extends $dara.Model {
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
  variablesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      processId: 'ProcessId',
      taskName: 'TaskName',
      variablesShrink: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      processId: 'string',
      taskName: 'string',
      variablesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

