// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityPolicyRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 10 tag keys.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 10 tag values.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * Test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the TLS security policies. You can specify at most 20 policy IDs in each call.
   */
  securityPolicyIds?: string[];
  /**
   * @remarks
   * The names of the TLS security policies. You can specify at most 20 policy names.
   */
  securityPolicyNames?: string[];
  /**
   * @remarks
   * The tags.
   */
  tag?: ListSecurityPolicyRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyIds: 'SecurityPolicyIds',
      securityPolicyNames: 'SecurityPolicyNames',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityPolicyIds: { 'type': 'array', 'itemType': 'string' },
      securityPolicyNames: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListSecurityPolicyRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.securityPolicyIds)) {
      $dara.Model.validateArray(this.securityPolicyIds);
    }
    if(Array.isArray(this.securityPolicyNames)) {
      $dara.Model.validateArray(this.securityPolicyNames);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

