// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPackageJobsResponseBodyPackageJobListPackageJobs } from "./ListPackageJobsResponseBodyPackageJobListPackageJobs";


export class ListPackageJobsResponseBodyPackageJobList extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. The token of the next page is returned after you call this operation for the first time.
   * 
   * @example
   * 019daf5780f74831b0e1a767c9f1c178
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The list of packaging jobs.
   */
  packageJobs?: ListPackageJobsResponseBodyPackageJobListPackageJobs[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      packageJobs: 'PackageJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      packageJobs: { 'type': 'array', 'itemType': ListPackageJobsResponseBodyPackageJobListPackageJobs },
    };
  }

  validate() {
    if(Array.isArray(this.packageJobs)) {
      $dara.Model.validateArray(this.packageJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

