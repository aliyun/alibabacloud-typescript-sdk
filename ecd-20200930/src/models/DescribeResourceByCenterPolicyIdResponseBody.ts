// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourceByCenterPolicyIdResponseBodyResourceModelList } from "./DescribeResourceByCenterPolicyIdResponseBodyResourceModelList";


export class DescribeResourceByCenterPolicyIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 2
   */
  count?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48174475-5EB2-5F99-A9E9-6F892D645****
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   */
  resourceModelList?: DescribeResourceByCenterPolicyIdResponseBodyResourceModelList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceModelList: 'ResourceModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      nextToken: 'string',
      requestId: 'string',
      resourceModelList: { 'type': 'array', 'itemType': DescribeResourceByCenterPolicyIdResponseBodyResourceModelList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceModelList)) {
      $dara.Model.validateArray(this.resourceModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

