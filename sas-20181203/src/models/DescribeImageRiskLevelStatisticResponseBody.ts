// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRiskLevelStatisticResponseBodyImageRiskLevelList extends $dara.Model {
  /**
   * @remarks
   * The number of images at the specified risk level.
   * 
   * @example
   * 12
   */
  cnt?: number;
  /**
   * @remarks
   * The image risk level. Valid values:
   *  - **3**: high risk
   * - **2**: medium risk
   * - **1**: low risk
   * - **0**: no risk.
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
   * The risk information at the image level, including risks from vulnerability, baseline, and malicious file detection.
   */
  imageRiskLevelList?: DescribeImageRiskLevelStatisticResponseBodyImageRiskLevelList[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
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

