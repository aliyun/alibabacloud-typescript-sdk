// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Input } from "./Input";


export class UpdateTriggerRequestActions extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * doc/convert
   */
  name?: string;
  /**
   * @remarks
   * The template parameters.
   */
  parameters?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The processing templates.
   */
  actions?: UpdateTriggerRequestActions[];
  /**
   * @remarks
   * The ID of the trigger. You can obtain the ID of the trigger from the response of the [CreateTrigger](https://help.aliyun.com/document_detail/479912.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * trigger-9f72636a-0f0c-4baf-ae78-38b27b******
   */
  id?: string;
  /**
   * @remarks
   * The data source configurations.
   */
  input?: Input;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The custom tags. You can search for or filter asynchronous tasks by custom tag.
   * 
   * @example
   * {"test": "val1"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      id: 'Id',
      input: 'Input',
      projectName: 'ProjectName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': UpdateTriggerRequestActions },
      id: 'string',
      input: Input,
      projectName: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

