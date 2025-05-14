// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingProjectResponseBodyProject extends $dara.Model {
  /**
   * @remarks
   * The business configuration of the project. This parameter can be ignored for general editing projects.
   * 
   * @example
   * { "OutputMediaConfig" : { "StorageLocation": "test-bucket.oss-cn-shanghai.aliyuncs.com", "Path": "test-path" }, "OutputMediaTarget": "oss-object", "ReservationTime": "2021-06-21T08:05:00Z" }
   */
  businessConfig?: string;
  /**
   * @remarks
   * The business status of the project. This parameter can be ignored for general editing projects. Valid values:
   * 
   * Reserving
   * 
   * ReservationCanceled
   * 
   * BroadCasting
   * 
   * LoadingFailed
   * 
   * LiveFinished
   * 
   * @example
   * Reserving
   */
  businessStatus?: string;
  /**
   * @remarks
   * The material parameter corresponding to the template, in the JSON format. If TemplateId is specified, ClipsParam must also be specified. For more information<props="china">, see [Create and use a regular template](https://help.aliyun.com/document_detail/328557.html) and [Create and use an advanced template](https://help.aliyun.com/document_detail/291418.html).
   */
  clipsParam?: string;
  /**
   * @remarks
   * The thumbnail URL of the online editing project.
   * 
   * @example
   * oss://example-bucket/example.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The method for creating the online editing project. Valid values:
   * 
   * \\- OpenAPI
   * 
   * \\- AliyunConsole
   * 
   * \\- WebSDK
   * 
   * \\- LiveEditingOpenAPI
   * 
   * \\- LiveEditingConsole
   * 
   * @example
   * OpenAPI
   */
  createSource?: string;
  /**
   * @remarks
   * The time when the online editing project was created.
   * 
   * @example
   * 2020-12-20T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the online editing project.
   */
  description?: string;
  /**
   * @remarks
   * The total duration of the online editing project.
   * 
   * @example
   * 24.120000
   */
  duration?: number;
  /**
   * @remarks
   * The method for editing the online editing project. Valid values:
   * 
   * \\- OpenAPI
   * 
   * \\- AliyunConsole
   * 
   * \\- WebSDK
   * 
   * \\- LiveEditingOpenAPI
   * 
   * \\- LiveEditingConsole
   * 
   * @example
   * OpenAPI
   */
  modifiedSource?: string;
  /**
   * @remarks
   * The time when the online editing project was last modified.
   * 
   * @example
   * 2020-12-20T13:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * ****fb2101bf24b2754cb318787dc****
   */
  projectId?: string;
  /**
   * @remarks
   * The type of the editing project. Default value: EditingProject. Valid values:
   * 
   * \\- EditingProject: a regular editing project.
   * 
   * \\- LiveEditingProject: a live stream editing project.
   * 
   * @example
   * EditingProject
   */
  projectType?: string;
  /**
   * @remarks
   * The status of the online editing project. Valid values:
   * 
   * \\- Draft
   * 
   * \\- Editing
   * 
   * \\- Producing
   * 
   * \\- Produced
   * 
   * \\- ProduceFailed
   * 
   * \\- Deleted
   * 
   * @example
   * Editing
   */
  status?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The template type of the online editing project. Valid values:
   * 
   * \\- Timeline
   * 
   * \\- VETemplate
   * 
   * @example
   * Timeline
   */
  templateType?: string;
  /**
   * @remarks
   * The timeline of the online editing project.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****9b4d7cf14dc7b83b0e801cbe****"},{"MediaId":"****9b4d7cf14dc7b83b0e801cbe****"},{"MediaId":"****1656bca4474999c961a6d2a2****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The error message returned if the project conversion failed. The error message displays the detailed information about the failure, and is returned only if the value of TimelineConvertStatus is ConvertFailed.
   * 
   * @example
   * The StorageLocation must be in the same division(apiRegion) as ICE service access point.
   */
  timelineConvertErrorMessage?: string;
  /**
   * @remarks
   * The project conversion status. Conversion of an API-style timeline into a frontend-style timeline is an asynchronous process and takes effect only if RequestSource:WebSDK is specified.
   * 
   * \\- Unconverted
   * 
   * \\- Converting
   * 
   * \\- Converted
   * 
   * \\- ConvertFailed
   * 
   * @example
   * Converted
   */
  timelineConvertStatus?: string;
  /**
   * @remarks
   * The title of the online editing project.
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

