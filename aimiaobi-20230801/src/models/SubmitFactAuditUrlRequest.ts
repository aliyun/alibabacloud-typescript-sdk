// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitFactAuditUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the information source you want to use for factuality audit. After you add a source URL using this operation, MiaoBi retrieves audit information only from your configured list of URLs. If you do not add any URL, MiaoBi searches the entire web for audit information. You can configure up to 10 source URLs.
   * 
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com
   */
  url?: string;
  /**
   * @remarks
   * Unique identifier of the Alibaba Cloud Model Studio workspace. To get the workspace ID, see [Get the workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
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

