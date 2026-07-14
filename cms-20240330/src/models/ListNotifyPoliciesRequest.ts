// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNotifyPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The policy name used for fuzzy filtering.
   * 
   * @example
   * prod-alert
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first page. For subsequent pages, set this parameter to the nextToken value returned in the previous response.
   * 
   * @example
   * eyJjdXJzb3IiOjEwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The field used for sorting. Valid values: createTime, updateTime, and name.
   * 
   * @example
   * createTime
   */
  orderBy?: string;
  /**
   * @remarks
   * Specifies whether to sort results in descending order. Valid values:
   * - true: descending order.
   * - false: ascending order.
   * 
   * @example
   * true
   */
  orderDesc?: string;
  /**
   * @remarks
   * The workspace ID. This parameter is used to isolate notify policy resources across different business spaces.
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

