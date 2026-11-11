// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAutoRenewalAttributeResponseBodyInstanceAttribute extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 123456789012****
   */
  aliUid?: number;
  /**
   * @remarks
   * The auto-renewal status. Valid values: true (auto-renewal enabled) and false (auto-renewal disabled).
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The instance ID, which is used to identify the purchased instance.
   * 
   * @example
   * cp-0bw2ew49****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      autoRenewal: 'AutoRenewal',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      autoRenewal: 'boolean',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries that meet the query conditions.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of instances and their auto-renewal status.
   */
  instanceAttribute?: DescribeInstanceAutoRenewalAttributeResponseBodyInstanceAttribute[];
  /**
   * @remarks
   * The maximum number of entries to return per query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The mark for paging. Leave this parameter empty for the first query. For subsequent paging, pass the NextToken value returned in the previous response as is. Do not construct or decode the value.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6k=
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number for paging, starting from 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot issues.
   * 
   * @example
   * 72481C12-69AB-5CE1-8A35-A8EFA921****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceAttribute: 'InstanceAttribute',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceAttribute: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewalAttributeResponseBodyInstanceAttribute },
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceAttribute)) {
      $dara.Model.validateArray(this.instanceAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

