// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReposDeveloperGroupMetric } from "./ReposDeveloperGroupMetric";


export class LibraryDeveloperRepoMetricResult extends $dara.Model {
  developerRepoMetrics?: ReposDeveloperGroupMetric[];
  static names(): { [key: string]: string } {
    return {
      developerRepoMetrics: 'developerRepoMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      developerRepoMetrics: { 'type': 'array', 'itemType': ReposDeveloperGroupMetric },
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

