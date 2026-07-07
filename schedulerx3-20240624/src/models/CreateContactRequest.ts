// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContactRequest extends $dara.Model {
  /**
   * @remarks
   * 渠道参数配置 JSON 字符串。IM 类型示例：{"channels":[{"channelType":"dingtalk","clientId":"xxx","clientSecret":"xxx","targetType":"group","targetId":"xxx","robotCode":"xxx"}]}
   * 
   * This parameter is required.
   * 
   * @example
   * {"channels":[{"channelType":"dingtalk","clientId":"xxx","clientSecret":"xxx","targetType":"group","targetId":"xxx","robotCode":"xxx"}]}
   */
  config?: string;
  /**
   * @remarks
   * 联系人名称（用户自定义，用于展示），同一用户下不可重名
   * 
   * This parameter is required.
   * 
   * @example
   * 陈睿
   */
  contactName?: string;
  /**
   * @remarks
   * 渠道大类，当前支持 IM
   * 
   * This parameter is required.
   * 
   * @example
   * IM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      contactName: 'ContactName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      contactName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

