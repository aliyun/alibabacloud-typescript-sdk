// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEditingProjectResponseBodyProject extends $dara.Model {
  /**
   * @remarks
   * The business configuration of the project. This parameter can be ignored for general editing projects.
   * 
   * @example
   * { "OutputMediaConfig" :    { "StorageLocation": "test-bucket.oss-cn-shanghai.aliyuncs.com", "Path": "test-path"   }, "OutputMediaTarget": "oss-object", "ReservationTime": "2021-06-21T08:05:00Z" }
   */
  businessConfig?: string;
  /**
   * @remarks
   * The business status of the project. This parameter can be ignored for general editing projects. Valid values:
   * 
   * *   Reserving
   * *   ReservationCanceled
   * *   BroadCasting
   * *   LoadingFailed
   * *   LiveFinished
   * 
   * @example
   * Reserving
   */
  businessStatus?: string;
  /**
   * @remarks
   * The template material parameters.
   */
  clipsParam?: string;
  /**
   * @remarks
   * The thumbnail URL of the online editing project.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
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
   * WebSDK
   */
  createSource?: string;
  /**
   * @remarks
   * The time when the online editing project was created.
   * 
   * @example
   * 2021-01-08T16:52:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the online editing project.
   * 
   * @example
   * example_description
   */
  description?: string;
  /**
   * @remarks
   * The duration of the online editing project.
   * 
   * @example
   * 3.4200000
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
   * WebSDK
   */
  modifiedSource?: string;
  /**
   * @remarks
   * The time when the online editing project was last edited.
   * 
   * @example
   * 2021-01-08T16:52:07Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * ****01bf24bf41c78b2754cb3187****
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
   * LiveEditingProject
   */
  projectType?: string;
  /**
   * @remarks
   * The status of the online editing project.
   * 
   * Valid values:
   * 
   * \\- 1: Draft
   * 
   * \\- 2: Editing
   * 
   * \\- 3: Producing
   * 
   * \\- 4: Produced
   * 
   * \\- 5: ProduceFailed
   * 
   * \\- 7: Deleted
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The status of the online editing project. For more information, see the status list.
   * 
   * @example
   * Editing
   */
  statusName?: string;
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
   * The timeline of the online editing project, in the JSON format.<props="china">For more information about objects in a timeline, see [Timeline configurations](https://help.aliyun.com/document_detail/198823.htm?spm=a2c4g.11186623.2.9.90dc653dF67srN#topic-2024662).  If you leave this parameter empty, an empty timeline is created and the duration of the online editing project is zero.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The title of the online editing project.
   * 
   * @example
   * example_title
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
      statusName: 'StatusName',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      timeline: 'Timeline',
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
      status: 'number',
      statusName: 'string',
      templateId: 'string',
      templateType: 'string',
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

