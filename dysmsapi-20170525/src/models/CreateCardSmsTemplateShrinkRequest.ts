// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCardSmsTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile phone manufacturer. Valid values:
   * 
   * *   **HuaWei**: HUAWEI
   * *   **XiaoMi**: Xiaomi
   * *   **OPPO**: OPPO
   * *   **VIVO**: vivo
   * *   **MEIZU**: MEIZU
   * 
   * > If this parameter is not specified, the system automatically specifies a supported mobile phone manufacturer.
   * 
   * @example
   * XiaoMi
   */
  factorys?: string;
  /**
   * @remarks
   * The description of the message template.
   * 
   * @example
   * Image and Text Template
   */
  memo?: string;
  /**
   * @remarks
   * The content of the card message template.
   * 
   * > 
   * 
   * *   For information about fields such as Template, ExtendInfo, TemplateContent, TmpCard, and Action, see [Parameters of card message templates](https://help.aliyun.com/document_detail/434929.html).
   * 
   * *   Message template content varies based on the template type. For more information, see [Sample message templates](https://help.aliyun.com/document_detail/435361.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *        "extendInfo":{
   *               "scene":"HMOVM",
   *               "purpose":"2",
   *               "userExt":{
   *                      "outId":"1234554321"
   *               }
   *        },
   *        "templateContent":{
   *               "pages":[
   *                      {
   * "tmpCards":[
   *                                    {
   *                                           "type":"IMAGE",
   *                                           "srcType":1,
   *                                           "src":"28755",
   *                                           "actionType":"OPEN_APP",
   *                                           "action":{
   *                                                  "target":"https://s.tb.cn/c.KxzZ",
   *                                                  "merchantName":"test-template",
   *                                                  "packageName":[
   *                                                         "com.taobao.taobao"],
   *                                                  "floorUrl":"https://s.tb.cn/c.KxzZ"
   *                                           },
   *                                           "positionNumber":1
   *                                    },
   *                                    {
   *                                           "type":"TEXT",
   *                                           "content":"this is a test msg.",
   *                                           "isTextTitle":true,
   *                                           "positionNumber":2
   *                                    },
   *                                    {
   *                                           "type":"TEXT",
   *                                           "content":"Promotional information",
   *                                           "isTextTitle":false,
   *                                           "positionNumber":3
   *                                    },
   *                                    {
   *                                           "type":"BUTTON",
   *                                           "content":"Promotional information,",
   *                                           "actionType":"OPEN_BROWSER",
   *                                           "action":{
   *                                                  "target":"https://www.aliyun.com",
   *                                                  "merchantName":"Currently on the Alibaba Cloud official website."
   * },
   *                                           "positionNumber":4
   *                                    }]
   *                      }]
   *        },
   *        "cardSignName":"aliyun",
   *        "cardType":5
   * }
   */
  templateShrink?: string;
  /**
   * @remarks
   * The name of the card message template.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun Image and Text Template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      factorys: 'Factorys',
      memo: 'Memo',
      templateShrink: 'Template',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorys: 'string',
      memo: 'string',
      templateShrink: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

