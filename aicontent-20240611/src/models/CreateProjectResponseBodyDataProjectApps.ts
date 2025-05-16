// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectResponseBodyDataProjectAppsApplicationAccessIds } from "./CreateProjectResponseBodyDataProjectAppsApplicationAccessIds";


export class CreateProjectResponseBodyDataProjectApps extends $dara.Model {
  applicationAccessIds?: CreateProjectResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @example
   * 4867
   */
  id?: string;
  /**
   * @example
   * 4910
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
      applicationAccessIds: { 'type': 'array', 'itemType': CreateProjectResponseBodyDataProjectAppsApplicationAccessIds },
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

