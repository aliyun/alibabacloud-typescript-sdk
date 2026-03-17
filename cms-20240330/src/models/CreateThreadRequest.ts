// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateThreadRequestVariables extends $dara.Model {
  /**
   * @example
   * az_alipay
   */
  project?: string;
  /**
   * @example
   * rum-monitor-test-aysls-pub-cn-heyuan-monitor
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
  attributes?: { [key: string]: string };
  /**
   * @example
   * test
   */
  title?: string;
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

