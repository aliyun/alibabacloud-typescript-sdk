// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateExpressConnectRouterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the listener. Valid values of N: **1** to **20**. If specified, the value can be an empty string. The value can be up to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.
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

export class CreateExpressConnectRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The Autonomous System Number (ASN) of the Express Connect Router (ECR) instance. Valid values: 45104 (default), 64512 to 65534, and 4200000000 to 4294967294. The value 65025 is reserved by Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 45104
   */
  alibabaSideAsn?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the token from your client to ensure that the token is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Express Connect Router (ECR) instance.
   * 
   * > The description can be empty or 0 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether it is only a dry run for this request. Valid values:
   * 
   * - **true**: Sends a check request without modifying service resources.
   * 
   * - **false** (default): Sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the Express Connect Router (ECR) instance.
   * > The name can be empty or 0 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Express Connect Router (ECR) instance belongs.
   * 
   * @example
   * rg-acfmvvajg5q****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * You can add up to 20 tags.
   */
  tag?: CreateExpressConnectRouterRequestTag[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      alibabaSideAsn: 'AlibabaSideAsn',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alibabaSideAsn: 'number',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateExpressConnectRouterRequestTag },
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

