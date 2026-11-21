// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNotifyPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return for this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The keyword for fuzzy filtering by policy name.
   * 
   * @example
   * prod-alert
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first request. For subsequent requests, pass the nextToken value returned from the previous response.
   * 
   * @example
   * eyJjdXJzb3IiOjEwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The field by which to sort the results. Valid values: createTime, updateTime, and name.
   * 
   * @example
   * createTime
   */
  orderBy?: string;
  /**
   * @remarks
   * Specifies whether to sort the results in descending order. A value of true indicates descending order, and a value of false indicates ascending order.
   * 
   * @example
   * true
   */
  orderDesc?: string;
  /**
   * @remarks
   * The workspace ID, which is used to isolate notification policy resources across different business workspaces.
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

