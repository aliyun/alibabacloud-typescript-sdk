// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the tag.
   * 
   * Valid values: **Custom**, **System**, and **All**.
   * 
   * Default value: **All**.
   * 
   * @example
   * System
   */
  category?: string;
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **20**.
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
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **acl**: an access control list (ACL)
   * *   **loadbalancer**: an Application Load Balancer (ALB) instance
   * *   **securitypolicy**: a security policy
   * *   **servergroup**: a server group
   * 
   * This parameter is required.
   * 
   * @example
   * loadbalancer
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

