// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEditingProjectResponseBodyProject extends $dara.Model {
  /**
   * @remarks
   * The business configuration of the project. You can ignore this parameter for standard editing projects.
   * 
   * @example
   * { "OutputMediaConfig" :    { "StorageLocation": "test-bucket.oss-cn-shanghai.aliyuncs.com", "Path": "test-path"   }, "OutputMediaTarget": "oss-object", "ReservationTime": "2021-06-21T08:05:00Z" }
   */
  businessConfig?: string;
  /**
   * @remarks
   * The business status of the project. You can ignore this parameter for standard editing projects.
   * 
   * - Reserving
   * 
   * - ReservationCanceled 
   * 
   * - BroadCasting
   * 
   * - LoadingFailed
   * 
   * - LiveFinished
   * 
   * @example
   * Reserving
   */
  businessStatus?: string;
  /**
   * @remarks
   * The material parameters for the template.
   * 
   * @example
   * See the template documentation
   */
  clipsParam?: string;
  /**
   * @remarks
   * The cover of the cloud editing project.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  coverURL?: string;
  /**
   * @remarks
   * The method used to create the cloud editing project.
   * 
   * - OpenAPI
   * 
   * - AliyunConsole
   * 
   * - WebSDK
   * 
   * - LiveEditingOpenAPI 
   * 
   * - LiveEditingConsole
   * 
   * @example
   * WebSDK
   */
  createSource?: string;
  /**
   * @remarks
   * The time when the cloud editing project was created. The time follows the ISO 8601 standard and is displayed in UTC (ending with Z).
   * 
   * @example
   * 2021-01-08T16:52:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the project.
   * 
   * @example
   * example_description
   */
  description?: string;
  /**
   * @remarks
   * The duration of the cloud editing project.
   * 
   * @example
   * 3.4200000
   */
  duration?: number;
  /**
   * @remarks
   * The method used to modify the cloud editing project.
   * 
   * - OpenAPI
   * - AliyunConsole
   * - WebSDK
   * - LiveEditingOpenAPI 
   * - LiveEditingConsole
   * 
   * @example
   * WebSDK
   */
  modifiedSource?: string;
  /**
   * @remarks
   * The time when the cloud editing project was modified. The time follows the ISO 8601 standard and is displayed in UTC (ending with Z).
   * 
   * @example
   * 2021-01-08T16:52:07Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the cloud editing project.
   * 
   * @example
   * ****01bf24bf41c78b2754cb3187****
   */
  projectId?: string;
  /**
   * @remarks
   * The type of the editing project. Default value: EditingProject.
   * 
   * - EditingProject: standard editing project.
   * 
   * - LiveEditingProject: live streaming editing project.
   * 
   * @example
   * LiveEditingProject
   */
  projectType?: string;
  /**
   * @remarks
   * The status of the cloud editing project.
   * 
   * All cloud editing project statuses:
   * 
   * - 1: Draft.
   * 
   * - 2: Editing.
   * 
   * - 3: Producing.
   * 
   * - 4: Produced.
   * 
   * - 5: ProduceFailed.
   * 
   * - 7: Deleted.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The name of the cloud editing status, which corresponds to the status name in the status list.
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
   * The template type of the cloud editing project.
   * 
   * - Timeline
   * 
   * - VETemplate
   * 
   * @example
   * Timeline
   */
  templateType?: string;
  /**
   * @remarks
   * The timeline of the cloud editing project in JSON format. For more information about the structure, see [TimeLine](~~198823#topic-2024662~~). If this field is empty, an empty timeline is created and the total duration of the cloud editing project is 0.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The title of the cloud editing project.
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

export class CreateEditingProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud editing project.
   */
  project?: CreateEditingProjectResponseBodyProject;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
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
      project: CreateEditingProjectResponseBodyProject,
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

