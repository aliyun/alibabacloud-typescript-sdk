// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecDatamaskRequest extends $dara.Model {
  /**
   * @remarks
   * The sensitive data to be de-identified. The value is a JSON string that contains the following parameters:
   * 
   * *   **dataHeaderList**: the names of the columns in which data needs to be de-identified. Specify the column names in accordance with the order of data that needs to be de-identified.
   * *   **dataList**: the data that needs to be de-identified.
   * *   **ruleList**: the IDs of sensitive data detection rules used to detect data that needs to be de-identified. Specify the rule IDs in accordance with the order of data that needs to be de-identified. Each ID identifies a sensitive data detection rule that is used to detect a type of sensitive data. You can call the [DescribeRules](~~DescribeRules~~) operation to query the IDs of sensitive data detection rules.
   * 
   * This parameter is required.
   * 
   * @example
   * {"dataHeaderList":["name","age"],"dataList":[["lily",18],["lucy",17]],"ruleList":[1002,null]}
   */
  data?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the de-identification template. The ID is generated after you create the de-identification template in the [Data Security Center (DSC) console](https://yundun.console.aliyun.com/?\\&p=sddpnext#/sddp/dm/template). You can choose **Data desensitization** > **Desensitization Template** in the left-side navigation pane and obtain the ID of the de-identification template from the **Desensitization Template** page.
   * 
   * *   If you select **Field name** as the matching mode of the template, DSC matches data based on the columns specified by the **dataHeaderList** parameter in the **Data** parameter.
   * *   If you select **Sensitive type** as the matching mode of the template, DSC matches data based on the sensitive data detection rules specified by the **ruleList** parameter in the **Data** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      featureType: 'FeatureType',
      lang: 'Lang',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      featureType: 'number',
      lang: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

