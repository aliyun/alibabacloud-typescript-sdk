// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteMapRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * If you specify this parameter, it cannot be an empty string. The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * If you specify this parameter, it cannot be empty. The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to a tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * tagtest
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

export class CreateRouteMapRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value on your client to ensure that the value is unique across different requests. The client token only supports ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the route map.
   * 
   * The description can be empty or 1 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * descname
   */
  description?: string;
  /**
   * @remarks
   * The direction of the route map. Valid values:
   * 
   * - **Inbound**: inbound. The direction in which the instance route table receives routes from the associated network instance. This affects the routes that the current instance can learn from the associated network instance.
   * - **Outbound**: outbound. The direction in which the instance route table sends routes to the associated network instance. This affects the routes that the current instance advertises to the associated network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Inbound
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request, including permission and instance status checks. Valid values:
   * 
   * - **false** (default): sends a normal request. After the check is passed, the route map is directly created.
   * - **true**: sends a dry run request. Only the check is performed, and the route map is not created. Check items include whether required parameters are specified and the request format. If the check fails, the corresponding error is returned. If the check is passed, the error code `DryRunOperation` is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the route map.
   * 
   * The name can be empty or 1 to 128 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Policy priority of the route map. Valid values: **1** to **100**. A smaller value indicates a higher priority.
   * 
   * > Policy priority of a route map must be unique within an Alibaba Cloud account. When a route map is executed, the system matches route map rules starting from the route map with the smallest priority value based on policy priority of the route map rules. Therefore, when you specify policy priority of a route map, make sure that policy priority meets your expected matching order.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm3unpnuw****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags at a time.
   */
  tag?: CreateRouteMapRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      direction: 'Direction',
      dryRun: 'DryRun',
      name: 'Name',
      priority: 'Priority',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      direction: 'string',
      dryRun: 'boolean',
      name: 'string',
      priority: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateRouteMapRequestTag },
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

