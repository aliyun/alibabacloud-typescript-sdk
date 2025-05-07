// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGreyTagRouteResponseBodyDataResultAlbRules } from "./ListGreyTagRouteResponseBodyDataResultAlbRules";
import { ListGreyTagRouteResponseBodyDataResultDubboRules } from "./ListGreyTagRouteResponseBodyDataResultDubboRules";
import { ListGreyTagRouteResponseBodyDataResultScRules } from "./ListGreyTagRouteResponseBodyDataResultScRules";


export class ListGreyTagRouteResponseBodyDataResult extends $dara.Model {
  albRules?: ListGreyTagRouteResponseBodyDataResultAlbRules[];
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
  dubboRules?: ListGreyTagRouteResponseBodyDataResultDubboRules[];
  /**
   * @remarks
   * The ID of the canary release rule.
   * 
   * @example
   * 1
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
  scRules?: ListGreyTagRouteResponseBodyDataResultScRules[];
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
      albRules: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultAlbRules },
      createTime: 'number',
      description: 'string',
      dubboRules: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultDubboRules },
      greyTagRouteId: 'number',
      name: 'string',
      scRules: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultScRules },
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

