// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsResponseBodyDataApplications } from "./ListApplicationsResponseBodyDataApplications";


export class ListApplicationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried applications.
   */
  applications?: ListApplicationsResponseBodyDataApplications[];
  /**
   * @remarks
   * The number of application instances.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The tags of the application.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The information about applications.
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplications },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

