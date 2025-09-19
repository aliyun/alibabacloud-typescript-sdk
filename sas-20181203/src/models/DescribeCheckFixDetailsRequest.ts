// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckFixDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the risk item.
   * 
   * >  You can call the [DescribeRiskType](~~DescribeRiskType~~) operation to query the IDs of risk items.
   * 
   * @example
   * 58
   */
  checkIds?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the baseline.
   * 
   * >  You can call the [DescribeCheckWarningSummary](https://help.aliyun.com/document_detail/116179.html) operation to query the IDs of baselines.
   * 
   * @example
   * 51
   */
  riskId?: number;
  static names(): { [key: string]: string } {
    return {
      checkIds: 'CheckIds',
      lang: 'Lang',
      riskId: 'RiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: 'string',
      lang: 'string',
      riskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

