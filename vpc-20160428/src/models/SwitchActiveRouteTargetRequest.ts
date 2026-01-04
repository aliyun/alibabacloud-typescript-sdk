// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchActiveRouteTargetRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the resource tag. Up to 20 tag keys are supported. If you need to pass this value, you cannot input an empty string.
   * 
   * Each tag key can have up to 128 characters and cannot start with `aliyun` or `acs:`. It also cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag. Up to 20 tag values are supported. If you need to pass this value, you can input an empty string. A maximum of 128 characters is allowed. The value cannot start with `aliyun` or `acs:`, and it must not contain `http://` or `https://`.
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

export class SwitchActiveRouteTargetRequest extends $dara.Model {
  /**
   * @remarks
   * Client token, used to ensure the idempotence of the request. Generate a unique value for this parameter from your client to ensure that it is unique across different requests. The ClientToken only supports ASCII characters. Note: If you do not specify this, the system will automatically use the RequestId of the API request as the ClientToken identifier. The RequestId may differ for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe6****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID where the RouteTargetGroup is located.
   * 
   * You can obtain the region ID by calling the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the RouteTargetGroup.
   * 
   * This parameter is required.
   * 
   * @example
   * rtg-xxxx
   */
  routeTargetGroupId?: string;
  /**
   * @remarks
   * Resource tags.
   */
  tag?: SwitchActiveRouteTargetRequestTag[];
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
      tag: { 'type': 'array', 'itemType': SwitchActiveRouteTargetRequestTag },
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

