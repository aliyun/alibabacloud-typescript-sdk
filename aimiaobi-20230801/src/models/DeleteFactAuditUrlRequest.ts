// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFactAuditUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the audit information source you want to delete. The provided URL must match the result from GetFactAuditUrl for successful deletion.
   * 
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com
   */
  url?: string;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. Get the [workspace ID](https://help.aliyun.com/document_detail/2782167.html).
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

