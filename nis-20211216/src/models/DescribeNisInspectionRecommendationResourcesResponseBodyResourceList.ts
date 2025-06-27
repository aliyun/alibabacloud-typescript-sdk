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

