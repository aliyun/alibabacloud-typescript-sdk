// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RepoMetric } from "./RepoMetric";


export class PbcRepoMetricResult extends $dara.Model {
  repoMetrics?: RepoMetric[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      repoMetrics: 'repoMetrics',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoMetrics: { 'type': 'array', 'itemType': RepoMetric },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.repoMetrics)) {
      $dara.Model.validateArray(this.repoMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

