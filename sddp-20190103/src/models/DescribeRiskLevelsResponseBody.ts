// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskLevelsResponseBodyRiskLevelList extends $dara.Model {
  /**
   * @remarks
   * The description of the sensitivity level. You can enter a custom description.
   * 
   * The following list describes the sensitivity level names and the corresponding default description:
   * 
   * *   **NA**: which indicates that no sensitive data is detected.
   * *   **S1**: which indicates the sensitive data at sensitivity level 1.
   * *   **S2**: which indicates the sensitive data at sensitivity level 2.
   * *   **S3**: which indicates the sensitive data at sensitivity level 3.
   * *   **S4**: which indicates the sensitive data at sensitivity level 4.
   * *   **S5**: which indicates the sensitive data at sensitivity level 5.
   * *   **S6**: which indicates the sensitive data at sensitivity level 6.
   * *   **S7**: which indicates the sensitive data at sensitivity level 7.
   * *   **S8**: which indicates the sensitive data at sensitivity level 8.
   * *   **S9**: which indicates the sensitive data at sensitivity level 9.
   * *   **S10**: which indicates the sensitive data at sensitivity level 10.
   * 
   * @example
   * Sensitive data at sensitivity level 1
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the sensitivity level. Valid values: 1 to 11. Each sensitivity level ID maps a sensitivity level. For example, the sensitivity level ID of 2 corresponds to the sensitivity level S1.
   * 
   * For more information, see the description of the Name parameter.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The name of the sensitivity level. The highest sensitivity level varies based on rule templates. The highest sensitivity level is S10. The highest sensitivity level of the **Built-in data security classification templates for Alibaba and Ant Group** is S4, and that of the **built-in classification templates for financial data** and **built-in classification templates for assets** is S5. For more information about the built-in classification templates for financial data, see Guidelines for Security Classification of Financial Data and Security Data - JRT 0197-2020. For a copied rule template, the highest sensitivity level is S10. The following list describes the sensitivity level names and the corresponding IDs:
   * 
   * *   **NA**: 1
   * *   **S1**: 2
   * *   **S2**: 3
   * *   **S3**: 4
   * *   **S4**: 5
   * *   **S5**: 6
   * *   **S6**: 7
   * *   **S7**: 8
   * *   **S8**: 9
   * *   **S9**: 10
   * *   **S10**: 11
   * 
   * @example
   * S1
   */
  name?: string;
  /**
   * @remarks
   * The number of times that each sensitivity level is referenced in the rule template. Default value: 0.
   * 
   * @example
   * 20
   */
  referenceNum?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      referenceNum: 'ReferenceNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
      referenceNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskLevelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 136082B3-B21F-5E9D-B68E-991FFD205D24
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of sensitivity levels.
   */
  riskLevelList?: DescribeRiskLevelsResponseBodyRiskLevelList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskLevelList: 'RiskLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskLevelList: { 'type': 'array', 'itemType': DescribeRiskLevelsResponseBodyRiskLevelList },
    };
  }

  validate() {
    if(Array.isArray(this.riskLevelList)) {
      $dara.Model.validateArray(this.riskLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

