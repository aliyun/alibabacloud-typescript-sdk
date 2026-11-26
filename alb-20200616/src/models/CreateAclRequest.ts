// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * product
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

export class CreateAclRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the ACL. The name must start with a letter, Chinese character, or digit, and can contain digits, periods (.), underscores (_), hyphens (-), and spaces. The name must be 2 to 128 characters in length.
   * 
   * @example
   * test-acl
   */
  aclName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client to ensure that the value is unique across different requests. The client token supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3*****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - **true**: The system performs a dry run on the request without creating the access control policy group. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, the system returns an error. If the request passes the dry run, the system returns the `DryRunOperation` error code.
   * - **false** (default): The system sends a normal request. If the request passes the dry run, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * rg-12313
   */
  tag?: CreateAclRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aclName: 'AclName',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclName: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateAclRequestTag },
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

