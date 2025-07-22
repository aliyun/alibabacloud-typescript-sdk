// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateExpressConnectRouterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
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
   * The autonomous system number (ASN) of the ECR. Valid values: 45104, 64512 to 65534, and 4200000000 to 4294967294. Default value: 45104. The value 65025 is reserved by Alibaba Cloud.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the ECR.
   * 
   * >  The description can be empty or 0 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run.
   * *   **false** (default): performs a dry run and performs the actual request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the ECR.
   * 
   * >  The name must be 0 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the ECR belongs.
   * 
   * @example
   * rg-acfmvvajg5q****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: CreateExpressConnectRouterRequestTag[];
  static names(): { [key: string]: string } {
    return {
      alibabaSideAsn: 'AlibabaSideAsn',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
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

