// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactRequest extends $dara.Model {
  /**
   * @remarks
   * 渠道参数配置 JSON 字符串（可选，传入则更新）
   * 
   * @example
   * {"channels":[{"channelType":"dingtalk","clientId":"xxx","clientSecret":"xxx","targetType":"group","targetId":"xxx","robotCode":"xxx"}]}
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Tom
   */
  contactName?: string;
  /**
   * @remarks
   * 是否启用（true/false，可选）
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * 渠道大类（可选，传入则更新）
   * 
   * @example
   * IM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      contactName: 'ContactName',
      enabled: 'Enabled',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      contactName: 'string',
      enabled: 'boolean',
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

