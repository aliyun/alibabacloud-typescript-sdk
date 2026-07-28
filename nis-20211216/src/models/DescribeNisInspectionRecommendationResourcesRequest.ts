// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionRecommendationResourcesRequest extends $dara.Model {
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
   * The language to use.
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
   * The token that is used to query the next page of results. Set this parameter to the NextToken value returned from the last API call.
   * 
   * @example
   * hKrS+MVXkuOgztXnvdml16/uO3mvCyHxSjzdhx9VRUC+8umDTIV2Wg9TTOUrR7ve
   */
  nextToken?: string;
  /**
   * @remarks
   * The recommendation code for the abnormal item.
   * 
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

