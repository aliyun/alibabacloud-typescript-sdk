// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateThreadRequestVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * project
   */
  project?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspace
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThreadRequest extends $dara.Model {
  /**
   * @remarks
   * Key-value pairs that you can attach to the thread.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The title of the thread.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The variables for the thread. You can use them to pass custom data to the digital employee.
   */
  variables?: CreateThreadRequestVariables;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      title: 'title',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      title: 'string',
      variables: CreateThreadRequestVariables,
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(this.variables && typeof (this.variables as any).validate === 'function') {
      (this.variables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

