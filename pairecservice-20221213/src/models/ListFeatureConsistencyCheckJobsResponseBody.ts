// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs } from "./ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs";


export class ListFeatureConsistencyCheckJobsResponseBody extends $dara.Model {
  featureConsistencyCheckJobs?: ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs[];
  /**
   * @example
   * A04CB8C0-E74A-5E83-BC61-64D153574EC7
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckJobs: 'FeatureConsistencyCheckJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckJobs: { 'type': 'array', 'itemType': ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureConsistencyCheckJobs)) {
      $dara.Model.validateArray(this.featureConsistencyCheckJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

