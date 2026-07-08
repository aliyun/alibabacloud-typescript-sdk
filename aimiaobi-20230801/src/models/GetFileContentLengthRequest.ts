// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileContentLengthRequest extends $dara.Model {
  /**
   * @remarks
   * Document name
   * 
   * @example
   * test.pdf
   */
  docName?: string;
  /**
   * @remarks
   * File URL
   * 
   * @example
   * https://xxx/test.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * The unique identifier of an Alibaba Cloud Model Studio workspace. Get your [workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docName: 'DocName',
      fileUrl: 'FileUrl',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docName: 'string',
      fileUrl: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

