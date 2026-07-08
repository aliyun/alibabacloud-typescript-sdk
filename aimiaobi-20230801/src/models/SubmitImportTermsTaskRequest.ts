// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImportTermsTaskRequest extends $dara.Model {
  /**
   * @remarks
   * File Key.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx
   */
  fileKey?: string;
  /**
   * @remarks
   * Dictionary name. Optional. If not specified, the default is Default.
   */
  termsName?: string;
  /**
   * @remarks
   * Alibaba Cloud Model Studio unique workspace identifier: For more information, see [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      termsName: 'TermsName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      termsName: 'string',
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

