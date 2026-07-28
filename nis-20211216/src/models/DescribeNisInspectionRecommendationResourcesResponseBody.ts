// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionRecommendationResourcesResponseBodyResourceList extends $dara.Model {
  /**
   * @remarks
   * The details of the abnormal item.
   * 
   * @example
   * {ResourceId: "ngw-p0wn04hi4****q2us6q7q"}
   */
  analysisData?: string;
  /**
   * @remarks
   * The ID of the abnormal instance.
   * 
   * @example
   * ngw-p0wn04hi4****q2us6q7q
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * Public NAT gateway
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      analysisData: 'AnalysisData',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisData: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionRecommendationResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the inspection report.
   * 
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @remarks
   * The maximum number of entries returned on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to start the next query.
   * 
   * @example
   * qt0DqY2lXxwBt9/ROQoS/7J9p90D1vF2vFbwzb/1oSWr3AxcM6/KpObZ7Z1PZdcV
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
   */
  resourceList?: DescribeNisInspectionRecommendationResourcesResponseBodyResourceList[];
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 192
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceList: 'ResourceList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceList: { 'type': 'array', 'itemType': DescribeNisInspectionRecommendationResourcesResponseBodyResourceList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

