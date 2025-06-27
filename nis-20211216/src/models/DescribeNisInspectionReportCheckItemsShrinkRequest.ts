// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportCheckItemsShrinkRequest extends $dara.Model {
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
  resourceTypeShrink?: string;
  riskLevelShrink?: string;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'CategoryCode',
      inspectionReportId: 'InspectionReportId',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceTypeShrink: 'ResourceType',
      riskLevelShrink: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      inspectionReportId: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceTypeShrink: 'string',
      riskLevelShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

