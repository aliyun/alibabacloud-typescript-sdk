// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskLevelsResponseBodyRiskLevelList extends $dara.Model {
  /**
   * @remarks
   * The description of the risk level. You can customize the description.
   * 
   * The following list describes the mappings between risk level names and their default descriptions:
   * 
   * - **NA**: No sensitive data is detected
   * 
   * - **S1**: Level-1 sensitive data
   * 
   * - **S2**: Level-2 sensitive data
   * 
   * - **S3**: Level-3 sensitive data
   * 
   * - **S4**: Level-4 sensitive data
   * 
   * - **S5**: Level-5 sensitive data
   * 
   * - **S6**: Level-6 sensitive data
   * 
   * - **S7**: Level-7 sensitive data
   * 
   * - **S8**: Level-8 sensitive data
   * 
   * - **S9**: Level-9 sensitive data
   * 
   * - **S10**: Level-10 sensitive data
   * 
   * @example
   * S3
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the risk level. Valid values: 1 to 11. Each risk level ID corresponds to a risk level name. For example, the risk level ID 2 corresponds to the risk level S1.
   * 
   * For more information about the mappings, see the description of the Name parameter.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The name of the risk level for the sensitive data. The maximum risk level is S10 and varies based on the data classification template. The maximum risk level is S4 for the **built-in data security classification template for Alibaba and Ant Group**, and S5 for the **built-in data classification template for the finance industry (with reference to JR/T 0197-2020 Financial Data Security - Guidelines for Data Security Classification)** and the **built-in data classification standard for the energy industry**. If you use a copied template, the maximum risk level is S10.
   * The following list describes the mappings between risk level names and IDs:
   * 
   * - **NA**: 1
   * 
   * - **S1**: 2
   * 
   * - **S2**: 3
   * 
   * - **S3**: 4
   * 
   * - **S4**: 5
   * 
   * - **S5**: 6
   * 
   * - **S6**: 7
   * 
   * - **S7**: 8
   * 
   * - **S8**: 9
   * 
   * - **S9**: 10
   * 
   * - **S10**: 11
   * 
   * @example
   * S1
   */
  name?: string;
  /**
   * @remarks
   * The number of times the risk level is referenced in the template. The default value is 0.
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
   * A list of risk levels.
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

