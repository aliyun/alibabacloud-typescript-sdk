// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitExportTermsTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Name of the dictionary. Optional. If you do not specify a value, the default name is used.
   */
  termsName?: string;
  /**
   * @remarks
   * Unique identifier of the Alibaba Cloud Model Studio workspace. For more information, see [workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      termsName: 'TermsName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

