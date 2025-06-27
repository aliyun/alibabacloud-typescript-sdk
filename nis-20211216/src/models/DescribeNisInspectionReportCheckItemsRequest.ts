// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportCheckItemsRequest extends $dara.Model {
  /**
   * @example
   * stability
   */
  categoryCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml16/uO3mvCyHxSjzdhx9VRUC+8umDTIV2Wg9TTOUrR7ve
   */
  nextToken?: string;
  resourceType?: string[];
  riskLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'CategoryCode',
      inspectionReportId: 'InspectionReportId',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      inspectionReportId: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceType: { 'type': 'array', 'itemType': 'string' },
      riskLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceType)) {
      $dara.Model.validateArray(this.resourceType);
    }
    if(Array.isArray(this.riskLevel)) {
      $dara.Model.validateArray(this.riskLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

