// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRiskLevelsResponseBodyRiskLevelList } from "./DescribeRiskLevelsResponseBodyRiskLevelList";


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

