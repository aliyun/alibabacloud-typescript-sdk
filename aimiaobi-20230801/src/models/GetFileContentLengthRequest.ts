// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileContentLengthRequest extends $dara.Model {
  /**
   * @example
   * test.pdf
   */
  docName?: string;
  /**
   * @example
   * https://xxx/test.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
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

