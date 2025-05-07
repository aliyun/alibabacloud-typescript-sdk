// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGreyTagRouteResponseBodyDataAlbRules } from "./DescribeGreyTagRouteResponseBodyDataAlbRules";
import { DescribeGreyTagRouteResponseBodyDataDubboRules } from "./DescribeGreyTagRouteResponseBodyDataDubboRules";
import { DescribeGreyTagRouteResponseBodyDataScRules } from "./DescribeGreyTagRouteResponseBodyDataScRules";


export class DescribeGreyTagRouteResponseBodyData extends $dara.Model {
  albRules?: DescribeGreyTagRouteResponseBodyDataAlbRules[];
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 3faaf993-7aed-4bcd-b189-625e6a5a****
   */
  appId?: string;
  /**
   * @remarks
   * The timestamp when the canary release rule was created. Unit: milliseconds.
   * 
   * @example
   * 1619007592013
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the canary release rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The canary release rule of the Dubbo service.
   */
  dubboRules?: DescribeGreyTagRouteResponseBodyDataDubboRules[];
  /**
   * @remarks
   * The ID of the canary release rule. The ID is globally unique.
   * 
   * @example
   * 16
   */
  greyTagRouteId?: number;
  /**
   * @remarks
   * The name of the canary release rule.
   * 
   * @example
   * rule-name
   */
  name?: string;
  /**
   * @remarks
   * The canary release rule of the Spring Cloud application.
   */
  scRules?: DescribeGreyTagRouteResponseBodyDataScRules[];
  /**
   * @remarks
   * The timestamp when the canary release rule was updated. Unit: milliseconds.
   * 
   * @example
   * 1609434061000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      albRules: 'AlbRules',
      appId: 'AppId',
      createTime: 'CreateTime',
      description: 'Description',
      dubboRules: 'DubboRules',
      greyTagRouteId: 'GreyTagRouteId',
      name: 'Name',
      scRules: 'ScRules',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albRules: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataAlbRules },
      appId: 'string',
      createTime: 'number',
      description: 'string',
      dubboRules: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataDubboRules },
      greyTagRouteId: 'number',
      name: 'string',
      scRules: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataScRules },
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.albRules)) {
      $dara.Model.validateArray(this.albRules);
    }
    if(Array.isArray(this.dubboRules)) {
      $dara.Model.validateArray(this.dubboRules);
    }
    if(Array.isArray(this.scRules)) {
      $dara.Model.validateArray(this.scRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

