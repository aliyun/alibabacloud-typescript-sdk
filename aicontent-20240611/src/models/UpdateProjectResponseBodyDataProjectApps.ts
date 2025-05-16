// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateProjectResponseBodyDataProjectAppsApplicationAccessIds } from "./UpdateProjectResponseBodyDataProjectAppsApplicationAccessIds";


export class UpdateProjectResponseBodyDataProjectApps extends $dara.Model {
  applicationAccessIds?: UpdateProjectResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @example
   * 4498
   */
  id?: string;
  /**
   * @example
   * 1889
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
      applicationAccessIds: { 'type': 'array', 'itemType': UpdateProjectResponseBodyDataProjectAppsApplicationAccessIds },
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

