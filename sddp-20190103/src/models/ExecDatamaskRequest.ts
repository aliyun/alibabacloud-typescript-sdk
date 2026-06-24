// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecDatamaskRequest extends $dara.Model {
  /**
   * @remarks
   * The data that you want to mask. The data must be a string in JSON format and include the following fields:
   * 
   * - **dataHeaderList**: The column names of the data. The order of the column names must correspond to the order of the data that you want to mask.
   * 
   * - **dataList**: The data that you want to mask.
   * 
   * - **ruleList**: A list of sensitive data type IDs. The order of the IDs must correspond to the order of the data that you want to mask. Each ID is a number that represents a sensitive data type. You can call the [DescribeRules](https://help.aliyun.com/document_detail/410141.html) operation to obtain the IDs.
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
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Simplified Chinese
   * 
   * - **en_us**: English (US)
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the data masking template. A template ID is generated after you create a template in the [Data Security Center console](https://yundun.console.aliyun.com/?p=sddp#/dm/dmConfig/cn-zhangjiakou). You can find the **Template ID** on the **Data Masking** > **Masking Configuration** > **Masking Template** page.
   * 
   * - If the matching type of the data masking template is **Field Name**, the system matches the data against **dataHeaderList** in **Data**.
   * 
   * - If the matching type of the data masking template is **Sensitive Data Type**, the system matches the data against **ruleList** in **Data**.
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

