// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmsTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business scenario.
   * 
   * - If the associated SMS signature\\"s business scenario is "Live App", the `ApplySceneContent` parameter must be an app URL starting with `http://` or `https://`.
   * 
   * - The `ApplySceneContent` parameter is required if the associated SMS signature\\"s business scenario is "Registered Trademark" or "Name of Enterprise or Public Institution".
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  /**
   * @remarks
   * The type of the international/regional template. This parameter is required when the **TemplateType** parameter is set to **3**. Valid values:
   * 
   * - **0**: SMS notification.
   * 
   * - **1**: promotional SMS.
   * 
   * - **2**: verification code.
   * 
   * @example
   * 0
   */
  intlType?: number;
  /**
   * @remarks
   * Additional materials, such as supporting documents or business screenshots, to help reviewers understand your business. If `TemplateType` is set to `2` (promotional SMS), you must upload proof of user authorization. For more information, see [Upload specifications for user authorization materials](https://help.aliyun.com/document_detail/312341.html).
   */
  moreDataShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The SMS signature associated with the template.
   * 
   * @example
   * 阿里云
   */
  relatedSignName?: string;
  /**
   * @remarks
   * Describe your business scenario, including a URL if applicable. You must also provide a complete SMS message example with populated variables. Providing this information as required is critical for template approval.
   * 
   * @example
   * 登录场景使用验证码
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The code of the rejected SMS template. You can find the template code on the [Messages in Chinese Mainland > Template Management](https://dysms.console.aliyun.com/domestic/text/template) tab in the console or by calling the [QuerySmsTemplateList](~~QuerySmsTemplateList~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_152550****
   */
  templateCode?: string;
  /**
   * @remarks
   * The new template content, up to 500 characters long.
   * 
   * The template content and its variables must comply with [SMS template specifications](https://help.aliyun.com/document_detail/463161.html) to be approved. To increase the approval rate and efficiency, refer to the common examples on the [Apply for Template](https://dysms.console.aliyun.com/domestic/text/template/add) page. For more information about variable specifications, see [TemplateContent parameter variable specifications](https://help.aliyun.com/document_detail/2806243.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 您正在申请手机注册，验证码为：${code}，5分钟内有效！
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the SMS template, up to 30 characters long. You can find the names of rejected templates on the [Messages in Chinese Mainland > Template Management](https://dysms.console.aliyun.com/domestic/text/template) tab in the console or by calling the [QuerySmsTemplateList](~~QuerySmsTemplateList~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 验证码模板
   */
  templateName?: string;
  /**
   * @remarks
   * The rules for the variables in the template. For details on how to define these rules, see the [example document](https://help.aliyun.com/document_detail/2806243.html).
   * 
   * @example
   * {"code":"characterWithNumber"}
   */
  templateRule?: string;
  /**
   * @remarks
   * The SMS type. Valid values:
   * 
   * - **0**: verification code.
   * 
   * - **1**: SMS notification.
   * 
   * - **2**: promotional SMS.
   * 
   * - **3**: international/regional message.
   * 
   * > Only enterprise-verified users can apply for promotional SMS and international/regional messages. For more information about the differences between personal and enterprise accounts, see [Usage notes](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  templateType?: number;
  /**
   * @remarks
   * >Warning: 
   * 
   * To manage SMS content security, messages that contain traffic-driving information such as phone numbers and URLs may be blocked by carriers, which can cause delivery failures. We recommend that you avoid including such information in your SMS templates to prevent delivery failures.
   * 
   * 
   * 
   * A JSON string that contains a list of traffic-driving information.
   * >Notice: The value must be in the JSON format. Convert the value to a string before you pass it in.
   * 
   * ### 1. Fields
   * 
   * {
   * "trafficDrivingType":"Traffic-driving type",
   * "trafficDrivingContent":"Traffic-driving content",
   * "variableName":"variable name",
   * "companyName":"Name of the enterprise or public institution",
   * "organizationCode":"Unified Social Credit Code",
   * "icpNo":"ICP filing/permit number",
   * "icpPicOssKey":"OSS key of the ICP filing screenshot",
   * "companyDifferentFromSignQuaReason":"The reason why the name of the enterprise or public institution is different from that in the SMS signature qualification"
   * }
   * 
   * ### 2. Notes
   * 
   * - If the content is not a variable, do not pass the `variableName` field.
   * 
   * - If the name of the enterprise or public institution is different from that in the SMS signature qualification, provide the `companyDifferentFromSignQuaReason` field.
   * 
   * - If `trafficDrivingType` is set to `DOMAIN`, you must provide all the fields.
   * 
   * - For `trafficDrivingType` values other than `DOMAIN`, the `trafficDrivingType`, `trafficDrivingContent`, `companyName`, and `organizationCode` fields are required. The `variableName` and `companyDifferentFromSignQuaReason` fields are optional.
   * 
   * ### 3. TrafficDrivingType enumeration
   * 
   * >Warning: 
   * 
   * Due to regulatory requirements, mobile numbers are not supported.
   * 
   * 
   * 
   * - `DOMAIN`: A domain name.
   * 
   * - `FIXED_PHONE`: A fixed-line phone number.
   * 
   * - `400_PHONE`: A phone number that starts with 400.
   * 
   * - `800_PHONE`: A phone number that starts with 800.
   * 
   * - `95_PHONE`: A phone number that starts with 95.
   * 
   * - `96_PHONE`: A phone number that starts with 96.
   * 
   * - `1_PHONE`: A 3-digit to 8-digit phone number that starts with 1.
   * 
   * - `OTHER_PHONE`: Another type of phone number.
   * 
   * @example
   * [{"trafficDrivingType":"DOMAIN","trafficDrivingContent":"aliyun.com","companyName":"阿里云计算有限公司","organizationCode":"91330****73959654P","icpNo":"浙B2-20****01-4","icpPicOssKey":"db7784d8-cb0c-498f-****-295f1ad6d665_mf29l7nf.png","companyDifferentFromSignQuaReason":"这是一段说明文字"},{"trafficDrivingType":"1_PHONE","trafficDrivingContent":"1**86","variableName":"my1Phone","companyName":"阿里云计算有限公司","organizationCode":"91330****73959654P","companyDifferentFromSignQuaReason":"这是一段说明文字"}]
   */
  trafficDriving?: string;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      intlType: 'IntlType',
      moreDataShrink: 'MoreData',
      ownerId: 'OwnerId',
      relatedSignName: 'RelatedSignName',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateRule: 'TemplateRule',
      templateType: 'TemplateType',
      trafficDriving: 'TrafficDriving',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applySceneContent: 'string',
      intlType: 'number',
      moreDataShrink: 'string',
      ownerId: 'number',
      relatedSignName: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateRule: 'string',
      templateType: 'number',
      trafficDriving: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

