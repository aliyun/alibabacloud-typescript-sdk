// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paging query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to mark the position from which to start reading. An empty value indicates that the query starts from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of policy IDs.
   */
  policyGroupIds?: string[];
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Default policy
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * Instance
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupIds: 'PolicyGroupIds',
      policyGroupName: 'PolicyGroupName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      policyGroupName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupIds)) {
      $dara.Model.validateArray(this.policyGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

