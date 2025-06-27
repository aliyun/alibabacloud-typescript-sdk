// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionRecommendationResourcesRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nat_snat_cross_az_warn
   */
  recommendationCode?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      recommendationCode: 'RecommendationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      recommendationCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

