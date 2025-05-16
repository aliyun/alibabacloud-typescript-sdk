// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryProjectListResponseBodyDataProjectApps } from "./QueryProjectListResponseBodyDataProjectApps";
import { QueryProjectListResponseBodyDataProjectSDK } from "./QueryProjectListResponseBodyDataProjectSdk";


export class QueryProjectListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2025-02-18 12:10:22
   */
  createTime?: string;
  projectApps?: QueryProjectListResponseBodyDataProjectApps[];
  /**
   * @example
   * 4910
   */
  projectId?: string;
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  projectSDK?: QueryProjectListResponseBodyDataProjectSDK[];
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
      projectApps: { 'type': 'array', 'itemType': QueryProjectListResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': QueryProjectListResponseBodyDataProjectSDK },
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

