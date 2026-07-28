// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportCheckItemsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the check item.
   * 
   * @example
   * stability
   */
  categoryCode?: string;
  /**
   * @remarks
   * The ID of the inspection report.
   * 
   * This parameter is required.
   * 
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @remarks
   * The language of the content. Valid values: zh-CN and en-US.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Set this parameter to the NextToken value returned from the previous call.
   * 
   * @example
   * hKrS+MVXkuOgztXnvdml16/uO3mvCyHxSjzdhx9VRUC+8umDTIV2Wg9TTOUrR7ve
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource type.
   */
  resourceTypeShrink?: string;
  /**
   * @remarks
   * A collection of risk levels.
   */
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

