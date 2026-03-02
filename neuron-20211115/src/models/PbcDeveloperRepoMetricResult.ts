// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReposDeveloperGroupMetric } from "./ReposDeveloperGroupMetric";


export class PbcDeveloperRepoMetricResult extends $dara.Model {
  developerRepoMetrics?: ReposDeveloperGroupMetric[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      developerRepoMetrics: 'developerRepoMetrics',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      developerRepoMetrics: { 'type': 'array', 'itemType': ReposDeveloperGroupMetric },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.developerRepoMetrics)) {
      $dara.Model.validateArray(this.developerRepoMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

