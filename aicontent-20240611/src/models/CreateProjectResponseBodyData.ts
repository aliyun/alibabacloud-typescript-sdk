// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectResponseBodyDataProjectApps } from "./CreateProjectResponseBodyDataProjectApps";
import { CreateProjectResponseBodyDataProjectSDK } from "./CreateProjectResponseBodyDataProjectSdk";


export class CreateProjectResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2023-02-15T09:17:39Z
   */
  createTime?: string;
  projectApps?: CreateProjectResponseBodyDataProjectApps[];
  /**
   * @example
   * 124187
   */
  projectId?: string;
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  projectSDK?: CreateProjectResponseBodyDataProjectSDK[];
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
      projectApps: { 'type': 'array', 'itemType': CreateProjectResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': CreateProjectResponseBodyDataProjectSDK },
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

