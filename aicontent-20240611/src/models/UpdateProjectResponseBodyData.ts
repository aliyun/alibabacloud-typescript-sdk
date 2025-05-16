// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateProjectResponseBodyDataProjectApps } from "./UpdateProjectResponseBodyDataProjectApps";
import { UpdateProjectResponseBodyDataProjectSDK } from "./UpdateProjectResponseBodyDataProjectSdk";


export class UpdateProjectResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-12-10T02:07:16Z
   */
  createTime?: string;
  projectApps?: UpdateProjectResponseBodyDataProjectApps[];
  /**
   * @example
   * 56160
   */
  projectId?: string;
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  projectSDK?: UpdateProjectResponseBodyDataProjectSDK[];
  /**
   * @example
   * WebApplication
   */
  projectType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      projectApps: 'ProjectApps',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectSDK: 'ProjectSDK',
      projectType: 'ProjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      projectApps: { 'type': 'array', 'itemType': UpdateProjectResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': UpdateProjectResponseBodyDataProjectSDK },
      projectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectApps)) {
      $dara.Model.validateArray(this.projectApps);
    }
    if(Array.isArray(this.projectSDK)) {
      $dara.Model.validateArray(this.projectSDK);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

