// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * This parameter cannot be an empty string once specified. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys in a single call.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. Once specified, the value can be an empty string.
   * 
   * You can specify up to 20 tag values in a single call.
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

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - **true**: performs a dry run without modifying EPS resources.
   * - **false** (default): sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of resource instance IDs.
   * 
   * You can specify up to 20 resources.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * - **EXPRESSCONNECTROUTER**: an Express Connect Router (ECR) instance.
   * - **EXPRESSCONNECTROUTERVPCASSOCIATION**: an associate relationship between an ECR and a VPC.
   * - **EXPRESSCONNECTROUTERTRASSOCIATION**: an associate relationship between an ECR and a transit router.
   * - **ECRFLOWLOG**: an ECR flow log.
   * 
   * This parameter is required.
   * 
   * @example
   * EXPRESSCONNECTROUTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags to bind.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

