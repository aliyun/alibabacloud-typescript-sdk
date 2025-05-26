// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOSSBucketAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the dataset was created.
   * 
   * @example
   * ""2023-12-19T17:29:34.790931971+08:00"
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * "Dataset"
   */
  description?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5F74C5C9-5AC0-49F9-914D-E01589D3****
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the dataset was last updated.
   * 
   * @example
   * "2023-12-19T17:29:34.790931971+08:00"
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      projectName: 'string',
      requestId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

