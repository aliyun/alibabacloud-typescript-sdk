// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuditTermsRequest extends $dara.Model {
  /**
   * @remarks
   * Maximum number of records to return.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next page.
   * 
   * @example
   * XXXX
   */
  nextToken?: string;
  /**
   * @remarks
   * Dictionary name. Optional. Defaults to Default if not specified.
   */
  termsName?: string;
  /**
   * @remarks
   * Unique identifier of the Alibaba Cloud Model Studio workspace. Get your [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      termsName: 'TermsName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
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

