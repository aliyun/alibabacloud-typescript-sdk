// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryProjectResponseBodyDataProjectApps } from "./QueryProjectResponseBodyDataProjectApps";
import { QueryProjectResponseBodyDataProjectSDK } from "./QueryProjectResponseBodyDataProjectSdk";


export class QueryProjectResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-11-01T13:40:53Z
   */
  createTime?: string;
  projectApps?: QueryProjectResponseBodyDataProjectApps[];
  /**
   * @example
   * 67055
   */
  projectId?: string;
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  projectSDK?: QueryProjectResponseBodyDataProjectSDK[];
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
      projectApps: { 'type': 'array', 'itemType': QueryProjectResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': QueryProjectResponseBodyDataProjectSDK },
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

