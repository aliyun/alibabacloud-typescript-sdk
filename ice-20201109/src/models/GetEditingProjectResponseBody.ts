// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingProjectResponseBodyProject extends $dara.Model {
  /**
   * @remarks
   * The business configuration of the project. This can be ignored for standard editing projects.
   * 
   * @example
   * { "OutputMediaConfig" : { "StorageLocation": "test-bucket.oss-cn-shanghai.aliyuncs.com", "Path": "test-path" }, "OutputMediaTarget": "oss-object", "ReservationTime": "2021-06-21T08:05:00Z" }
   */
  businessConfig?: string;
  /**
   * @remarks
   * The business status of the project. This can be ignored for standard editing projects. Valid values:
   * - Reserving: Reserving.
   * - ReservationCanceled: Reservation canceled.
   * - BroadCasting: Broadcasting.
   * - LoadingFailed: Loading failed.
   * - LiveFinished: Live streaming finished.
   * 
   * @example
   * Reserving
   */
  businessStatus?: string;
  /**
   * @remarks
   * The media asset parameters corresponding to the template, in JSON format. When TemplateId is not empty, ClipsParam cannot be empty. For the specific format, see [Create and use standard templates](https://help.aliyun.com/document_detail/445399.html) and [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * 
   * @example
   * See the template usage documentation
   */
  clipsParam?: string;
  /**
   * @remarks
   * The cover of the cloud editing project.
   * 
   * @example
   * http://aaa.bbb/your-cover.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The creation method of the cloud editing project. Valid values:
   * - OpenAPI
   * - AliyunConsole
   * - WebSDK
   * - LiveEditingOpenAPI
   * - LiveEditingConsole
   * 
   * @example
   * OpenAPI
   */
  createSource?: string;
  /**
   * @remarks
   * The creation time of the cloud editing project. The time follows the ISO 8601 standard and is displayed in UTC (ending with Z).
   * 
   * @example
   * 2020-12-20T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the cloud editing project.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * The total duration of the cloud editing project.
   * 
   * @example
   * 24.120000
   */
  duration?: number;
  /**
   * @remarks
   * The editing method of the cloud editing project. Valid values:
   * - OpenAPI
   * - AliyunConsole
   * - WebSDK
   * - LiveEditingOpenAPI
   * - LiveEditingConsole
   * 
   * @example
   * OpenAPI
   */
  modifiedSource?: string;
  /**
   * @remarks
   * The last modified time of the cloud editing project. The time follows the ISO 8601 standard and is displayed in UTC (ending with Z).
   * 
   * @example
   * 2020-12-20T13:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the cloud editing project.
   * 
   * @example
   * ****fb2101bf24b2754cb318787dc****
   */
  projectId?: string;
  /**
   * @remarks
   * The type of the editing project. Default value: EditingProject. Valid values:
   * - EditingProject: Standard editing project.
   * - LiveEditingProject: Live editing project.
   * 
   * @example
   * EditingProject
   */
  projectType?: string;
  /**
   * @remarks
   * The status of the cloud editing project. Valid values:
   * - Draft
   * - Editing
   * - Producing
   * - Produced
   * - ProduceFailed
   * - Deleted
   * 
   * @example
   * Editing
   */
  status?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The template type of the cloud editing project. Valid values:
   * - Timeline
   * - VETemplate
   * 
   * @example
   * Timeline
   */
  templateType?: string;
  /**
   * @remarks
   * The timeline of the cloud editing project.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****9b4d7cf14dc7b83b0e801cbe****"},{"MediaId":"****9b4d7cf14dc7b83b0e801cbe****"},{"MediaId":"****1656bca4474999c961a6d2a2****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The error message for project conversion failure. This is returned only when TimelineConvertStatus is ConvertFailed and contains detailed information about the conversion failure.
   * 
   * @example
   * The StorageLocation must be in the same division(apiRegion) as ICE service access point.
   */
  timelineConvertErrorMessage?: string;
  /**
   * @remarks
   * The timeline conversion status of the project. Converting an API-style timeline to a frontend-style timeline is an asynchronous process and takes effect only when RequestSource is set to WebSDK. Valid values:
   * - Unconverted: The timeline is not converted.
   * - Converting: The project is being converted.
   * - Converted: The project conversion is completed.
   * - ConvertFailed: The project conversion failed.
   * 
   * @example
   * Converted
   */
  timelineConvertStatus?: string;
  /**
   * @remarks
   * The title of the cloud editing project.
   * 
   * @example
   * Sample title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      businessConfig: 'BusinessConfig',
      businessStatus: 'BusinessStatus',
      clipsParam: 'ClipsParam',
      coverURL: 'CoverURL',
      createSource: 'CreateSource',
      createTime: 'CreateTime',
      description: 'Description',
      duration: 'Duration',
      modifiedSource: 'ModifiedSource',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      projectType: 'ProjectType',
      status: 'Status',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      timeline: 'Timeline',
      timelineConvertErrorMessage: 'TimelineConvertErrorMessage',
      timelineConvertStatus: 'TimelineConvertStatus',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessConfig: 'string',
      businessStatus: 'string',
      clipsParam: 'string',
      coverURL: 'string',
      createSource: 'string',
      createTime: 'string',
      description: 'string',
      duration: 'number',
      modifiedSource: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      projectType: 'string',
      status: 'string',
      templateId: 'string',
      templateType: 'string',
      timeline: 'string',
      timelineConvertErrorMessage: 'string',
      timelineConvertStatus: 'string',
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
   * The cloud editing project.
   */
  project?: GetEditingProjectResponseBodyProject;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
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

