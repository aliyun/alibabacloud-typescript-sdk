// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRiskLevelStatisticResponseBodyImageRiskLevelList extends $dara.Model {
  /**
   * @remarks
   * The number of images at the risk level.
   * 
   * @example
   * 12
   */
  cnt?: number;
  /**
   * @remarks
   * The risk level of the image. Valid values:
   * 
   * *   **3**: high risk.
   * *   **2**: medium risk.
   * *   **1**: low risk.
   * *   **0**: no risk.
   * 
   * @example
   * 0
   */
  imageRiskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      cnt: 'Cnt',
      imageRiskLevel: 'ImageRiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnt: 'number',
      imageRiskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageRiskLevelStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about risks at the image level. The risks include vulnerabilities, baselines risks, and malicious file risks.
   */
  imageRiskLevelList?: DescribeImageRiskLevelStatisticResponseBodyImageRiskLevelList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A60DA4EC-7CD8-577D-AD73-******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageRiskLevelList: 'ImageRiskLevelList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageRiskLevelList: { 'type': 'array', 'itemType': DescribeImageRiskLevelStatisticResponseBodyImageRiskLevelList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageRiskLevelList)) {
      $dara.Model.validateArray(this.imageRiskLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

