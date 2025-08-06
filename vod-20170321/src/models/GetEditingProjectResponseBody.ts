// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingProjectResponseBodyProject extends $dara.Model {
  /**
   * @remarks
   * The thumbnail URL of the online editing project.
   * 
   * @example
   * https://****.com/6AB4D0E1E1C74468883516C2349****.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the online editing project was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-10-23T13:33:40Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the online editing project.
   * 
   * @example
   * testdescription
   */
  description?: string;
  /**
   * @remarks
   * The last time when the online editing project was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-10-23T14:27:26Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * fb2101bf24b27*****54cb318787dc
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
   * 
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
   * The path of the Object Storage Service (OSS) bucket where the online editing project is stored.
   * 
   * > To view the path of the OSS bucket, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com/?spm=a2c4g.11186623.2.15.6948257eaZ4m54#/vod/settings/censored), and choose **Configuration Management** > **Media Management** > **Storage**. On the Storage page, you can view the path of the OSS bucket.
   * 
   * @example
   * location_s
   */
  storageLocation?: string;
  /**
   * @remarks
   * The timeline of the online editing project.
   * 
   * @example
   * {\\"TimelineIn\\":0,\\"TimelineOut\\":9.42}
   */
  timeline?: string;
  /**
   * @remarks
   * The title of the online editing project.
   * 
   * @example
   * video_1508736815000
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      status: 'Status',
      storageLocation: 'StorageLocation',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      regionId: 'string',
      status: 'string',
      storageLocation: 'string',
      timeline: 'string',
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

export class GetEditingProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the online editing project.
   */
  project?: GetEditingProjectResponseBodyProject;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 63E8B7C7-4812-46*****AD-0FA56029AC86
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: GetEditingProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  validate() {
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

