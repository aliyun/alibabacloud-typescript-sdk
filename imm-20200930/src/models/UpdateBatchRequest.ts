// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Input } from "./Input";


export class UpdateBatchRequestActions extends $dara.Model {
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
   * A list of template parameters.
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

export class UpdateBatchRequest extends $dara.Model {
  /**
   * @remarks
   * A list of data processing templates.
   */
  actions?: UpdateBatchRequestActions[];
  /**
   * @remarks
   * The ID of the batch processing task. For more information, see [Create a batch processing task](https://help.aliyun.com/document_detail/606694.html).
   * 
   * This parameter is required.
   * 
   * @example
   * batch-4eb9223f-3e88-42d3-a578-3f2852******
   */
  id?: string;
  /**
   * @remarks
   * The data source configuration.
   */
  input?: Input;
  /**
   * @remarks
   * The project name. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Custom tags used to search for and filter asynchronous tasks.
   * 
   * @example
   * {"key":"val"}
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
      actions: { 'type': 'array', 'itemType': UpdateBatchRequestActions },
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

