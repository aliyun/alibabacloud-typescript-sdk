// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNotifyPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return for this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The fuzzy filter for the policy name.
   * 
   * @example
   * prod-alert
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Leave empty for the first page. For subsequent pages, pass the nextToken returned from the previous page.
   * 
   * @example
   * eyJjdXJzb3IiOjEwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The field to sort by. Valid values include createTime, updateTime, and name.
   * 
   * @example
   * createTime
   */
  orderBy?: string;
  /**
   * @remarks
   * Specifies whether to sort in descending order. Set to true for descending order, or false for ascending order.
   * 
   * @example
   * true
   */
  orderDesc?: string;
  /**
   * @remarks
   * The workspace ID, used to isolate notification policy resources for different business workspaces.
   * 
   * This parameter is required.
   * 
   * @example
   * default-cms-xxxx-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      orderDesc: 'orderDesc',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      orderBy: 'string',
      orderDesc: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

