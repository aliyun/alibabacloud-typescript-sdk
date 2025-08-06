// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEditingProjectResponseBodyProjectListProject extends $dara.Model {
  /**
   * @remarks
   * The thumbnail URL of the online editing project.
   * 
   * @example
   * cover_url
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the online editing project was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the online editing project.
   * 
   * @example
   * test project 001
   */
  description?: string;
  /**
   * @remarks
   * The duration of the online editing project, which must be consistent with the duration of the timeline.
   * > The Timeline parameter is not included in response parameters.
   * 
   * @example
   * 22.65
   */
  duration?: number;
  /**
   * @remarks
   * The last time when the online editing project was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T13:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * 25cfc178d2de4*****e77aebed6afcd
   */
  projectId?: string;
  /**
   * @remarks
   * The region where the online editing project was created.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the online editing project. Separate multiple states with commas (,). By default, all online editing projects were queried. Valid values:
   * *   **Normal**: indicates that the online editing project is in draft.
   * *   **Producing**: indicates that the video is being produced.
   * *   **Produced**: indicates that the video was produced.
   * *   **ProduceFailed**: indicates that the video failed to be produced.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The path of the Object Storage Service (OSS) bucket where the produced video is stored.
   * > To view the path of the OSS bucket, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com/?spm=a2c4g.11186623.2.15.6948257eaZ4m54#/vod/settings/censored), and choose **Configuration Management** > **Media Management** > **Storage**. On the Storage page, you can view the path of the OSS bucket.
   * 
   * @example
   * location_s
   */
  storageLocation?: string;
  /**
   * @remarks
   * The title of the online editing project.
   * 
   * @example
   * video_150873681****
   */
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
  /**
   * @remarks
   * The list of online editing projects.
   */
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

