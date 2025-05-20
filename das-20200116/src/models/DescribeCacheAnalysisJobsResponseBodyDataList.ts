// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJob } from "./DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJob";


export class DescribeCacheAnalysisJobsResponseBodyDataList extends $dara.Model {
  cacheAnalysisJob?: DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJob[];
  static names(): { [key: string]: string } {
    return {
      cacheAnalysisJob: 'CacheAnalysisJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheAnalysisJob: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJob },
    };
  }

  validate() {
    if(Array.isArray(this.cacheAnalysisJob)) {
      $dara.Model.validateArray(this.cacheAnalysisJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

