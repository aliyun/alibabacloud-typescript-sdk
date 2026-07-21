// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID. When you call the [CopyCdsFile](https://help.aliyun.com/document_detail/2247626.html) operation to copy a folder, this field is returned because the copy is performed asynchronously in the background. Call this operation and pass in the asynchronous task ID to retrieve the task details.
   * 
   * This parameter is required.
   * 
   * @example
   * 81a8a07a-aec4-4dd5-80da-ae69e482****
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * The enterprise network disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+cds-135515****
   */
  cdsId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      cdsId: 'CdsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      cdsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

