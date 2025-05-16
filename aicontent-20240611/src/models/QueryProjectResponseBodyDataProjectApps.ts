// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryProjectResponseBodyDataProjectAppsApplicationAccessIds } from "./QueryProjectResponseBodyDataProjectAppsApplicationAccessIds";


export class QueryProjectResponseBodyDataProjectApps extends $dara.Model {
  applicationAccessIds?: QueryProjectResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @example
   * 2144
   */
  id?: string;
  /**
   * @example
   * 159
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
      applicationAccessIds: { 'type': 'array', 'itemType': QueryProjectResponseBodyDataProjectAppsApplicationAccessIds },
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

