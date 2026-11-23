// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. If you specify this parameter, it cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. If you specify this parameter, it can be an empty string.
   * 
   * @example
   * TestValue
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

export class DescribeExpressConnectRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value from your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The request is checked, but service resources are not modified.
   * 
   * - **false** (default): sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the Express Connect Router (ECR) instance.
   * 
   * @example
   * ecr-fu8rszhgv7623c****
   */
  ecrId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 2147483647. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the Express Connect Router (ECR) instance. The name must be 0 to 128 characters in length.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - For the first query or when no next query is required, leave this parameter empty.
   * - If a next query is required, set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * e0a2dbeb69a8beeeb8194e92b702df3fd3e7bfe6ce7bfc16e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Express Connect Router (ECR) instance belongs.
   * 
   * @example
   * rg-aek2aq7f4va****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags used for filtering. You can specify up to 20 tags.
   */
  tag?: DescribeExpressConnectRouterRequestTag[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeExpressConnectRouterRequestTag },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

