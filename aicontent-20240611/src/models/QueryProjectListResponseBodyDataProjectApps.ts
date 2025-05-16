// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryProjectListResponseBodyDataProjectAppsApplicationAccessIds } from "./QueryProjectListResponseBodyDataProjectAppsApplicationAccessIds";


export class QueryProjectListResponseBodyDataProjectApps extends $dara.Model {
  applicationAccessIds?: QueryProjectListResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @example
   * 4700
   */
  id?: string;
  /**
   * @example
   * 4747
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessIds: 'ApplicationAccessIds',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessIds: { 'type': 'array', 'itemType': QueryProjectListResponseBodyDataProjectAppsApplicationAccessIds },
      id: 'string',
      projectId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationAccessIds)) {
      $dara.Model.validateArray(this.applicationAccessIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

