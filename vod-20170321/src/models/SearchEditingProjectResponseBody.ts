// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEditingProjectResponseBodyProjectListProject extends $dara.Model {
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: number;
  modifiedTime?: string;
  projectId?: string;
  regionId?: string;
  status?: string;
  storageLocation?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      status: 'Status',
      storageLocation: 'StorageLocation',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      modifiedTime: 'string',
      projectId: 'string',
      regionId: 'string',
      status: 'string',
      storageLocation: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponseBodyProjectList extends $dara.Model {
  project?: SearchEditingProjectResponseBodyProjectListProject[];
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: { 'type': 'array', 'itemType': SearchEditingProjectResponseBodyProjectListProject },
    };
  }

  validate() {
    if(Array.isArray(this.project)) {
      $dara.Model.validateArray(this.project);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponseBody extends $dara.Model {
  projectList?: SearchEditingProjectResponseBodyProjectList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9262E3DA-07FA-48*****62-FCBB6BC61D08
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of online editing projects returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      projectList: 'ProjectList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectList: SearchEditingProjectResponseBodyProjectList,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.projectList && typeof (this.projectList as any).validate === 'function') {
      (this.projectList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

