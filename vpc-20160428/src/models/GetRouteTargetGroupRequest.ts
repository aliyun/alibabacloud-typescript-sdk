// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRouteTargetGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * Resource tag key. Up to 20 tag keys are supported. If you need to pass this value, you cannot input an empty string.
   * 
   * A tag key can have up to 128 characters and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * Resource tag value. Up to 20 tag values are supported. If you need to pass this value, you can input an empty string.
   * 
   * A tag value can have up to 128 characters and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
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

export class GetRouteTargetGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Client token, used to ensure idempotence of the request.
   * 
   * Generate a parameter value from your client and ensure that it is unique across different requests. ClientToken only supports ASCII characters.
   * 
   * > If you do not specify this, the system automatically uses the **RequestId** of the API request as the **ClientToken** identifier. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * ID of the region to which the route target group belongs. You can obtain the region ID by calling the DescribeRegions interface.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * ID of the route target group member instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rtg-xxxx
   */
  routeTargetGroupId?: string;
  /**
   * @remarks
   * Tag information.
   */
  tag?: GetRouteTargetGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      routeTargetGroupId: 'RouteTargetGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      routeTargetGroupId: 'string',
      tag: { 'type': 'array', 'itemType': GetRouteTargetGroupRequestTag },
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

