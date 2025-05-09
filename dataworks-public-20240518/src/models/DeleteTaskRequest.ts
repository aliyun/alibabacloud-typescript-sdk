// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The environment of the workspace.
   * 
   * Valid values:
   * 
   * *   Prod: production environment
   * *   Dev: development environment
   * 
   * @example
   * Prod
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      projectEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

