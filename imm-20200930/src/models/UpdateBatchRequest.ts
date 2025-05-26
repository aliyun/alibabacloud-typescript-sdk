// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateBatchRequestActions } from "./UpdateBatchRequestActions";
import { Input } from "./Input";


export class UpdateBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The processing templates.
   */
  actions?: UpdateBatchRequestActions[];
  /**
   * @remarks
   * The ID of the batch processing task. You can obtain the ID of the batch processing task from the response of the [CreateBatch](https://help.aliyun.com/document_detail/606694.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * batch-4eb9223f-3e88-42d3-a578-3f2852******
   */
  id?: string;
  /**
   * @remarks
   * The input data source.
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

