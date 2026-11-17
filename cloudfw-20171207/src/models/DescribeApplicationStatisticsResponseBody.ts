// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationStatisticsResponseBodyCategoryList extends $dara.Model {
  /**
   * @remarks
   * The number of applications in the application category.
   * 
   * @example
   * 12
   */
  applicationCount?: number;
  /**
   * @remarks
   * The name of the application category. The name is returned in Chinese or English based on the Lang parameter.
   * 
   * @example
   * Office collaboration
   */
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCount: 'ApplicationCount',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCount: 'number',
      categoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatisticsResponseBodyRiskList extends $dara.Model {
  /**
   * @remarks
   * The number of applications at the risk level.
   * 
   * @example
   * 20
   */
  applicationCount?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * - **Information**: Informational.
   * - **Low**: Low.
   * - **Medium**: Medium.
   * - **High**: High.
   * - **Critical**: Critical.
   * 
   * @example
   * Low
   */
  risk?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCount: 'ApplicationCount',
      risk: 'Risk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCount: 'number',
      risk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatisticsResponseBodyTechnologyList extends $dara.Model {
  /**
   * @remarks
   * The number of applications of the technology type.
   * 
   * @example
   * 8
   */
  applicationCount?: number;
  /**
   * @remarks
   * The name of the technology type. The name is returned in Chinese or English based on the Lang parameter.
   * 
   * @example
   * Browser-based
   */
  technology?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCount: 'ApplicationCount',
      technology: 'Technology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCount: 'number',
      technology: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of application counts grouped by application category.
   */
  categoryList?: DescribeApplicationStatisticsResponseBodyCategoryList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The list of application counts grouped by risk level.
   */
  riskList?: DescribeApplicationStatisticsResponseBodyRiskList[];
  /**
   * @remarks
   * The list of application counts grouped by technology type.
   */
  technologyList?: DescribeApplicationStatisticsResponseBodyTechnologyList[];
  static names(): { [key: string]: string } {
    return {
      categoryList: 'CategoryList',
      requestId: 'RequestId',
      riskList: 'RiskList',
      technologyList: 'TechnologyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryList: { 'type': 'array', 'itemType': DescribeApplicationStatisticsResponseBodyCategoryList },
      requestId: 'string',
      riskList: { 'type': 'array', 'itemType': DescribeApplicationStatisticsResponseBodyRiskList },
      technologyList: { 'type': 'array', 'itemType': DescribeApplicationStatisticsResponseBodyTechnologyList },
    };
  }

  validate() {
    if(Array.isArray(this.categoryList)) {
      $dara.Model.validateArray(this.categoryList);
    }
    if(Array.isArray(this.riskList)) {
      $dara.Model.validateArray(this.riskList);
    }
    if(Array.isArray(this.technologyList)) {
      $dara.Model.validateArray(this.technologyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

