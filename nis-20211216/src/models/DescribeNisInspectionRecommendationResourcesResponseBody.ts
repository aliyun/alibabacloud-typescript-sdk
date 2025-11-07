// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionRecommendationResourcesResponseBodyResourceList extends $dara.Model {
  /**
   * @example
   * {ResourceId: "ngw-p0wn04hi4****q2us6q7q"}
   */
  analysisData?: string;
  /**
   * @example
   * ngw-p0wn04hi4****q2us6q7q
   */
  resourceId?: string;
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
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * qt0DqY2lXxwBt9/ROQoS/7J9p90D1vF2vFbwzb/1oSWr3AxcM6/KpObZ7Z1PZdcV
   */
  nextToken?: string;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  resourceList?: DescribeNisInspectionRecommendationResourcesResponseBodyResourceList[];
  /**
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

