// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatSessionRequest extends $dara.Model {
  /**
   * @remarks
   * 需要在[数字人实时交互服务](https://common-buy.aliyun.com/?spm=a2c4g.11186623.0.0.457876812ETi6y&commodityCode=avatar_2dchat_public_cn)购买完成对应的服务购买，当前有可用的服务时，前往阿里云-[我的订单](https://billing-cost.console.aliyun.com/order/list)页面对应订单详情下进行查询
   * 
   * This parameter is required.
   * 
   * @example
   * rmq-cn-9t946y43m1d
   */
  instanceId?: string;
  /**
   * @remarks
   * 灵眸平台颁发的个人凭证（在使用端渲染数字人的场景下必填）。
   * 
   * @example
   * b9be4b25c2d38c409c376ffd2372be1
   */
  license?: string;
  /**
   * @remarks
   * 运行SDK的平台（在使用端渲染数字人的场景下必填）。
   * 
   * @example
   * Web | Android | iOS
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      license: 'license',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      license: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

