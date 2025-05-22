// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to be returned in a single call when NextToken is used for the query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0****
   */
  nextToken?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * This parameter is required.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

