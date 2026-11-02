// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The business configuration of the project. You can ignore this parameter for standard editing projects.
   * 
   * - If the project is a live streaming editing project, OutputMediaConfig.StorageLocation is required.
   * 
   * - If OutputMediaConfig.Path is not specified, the produced live streaming clips are stored in the root directory by default. 
   * 
   * - OutputMediaTarget can be set to vod-media or oss-object. If not specified, the default value is oss-object.
   * 
   * - If OutputMediaTarget is set to vod-media, the Path parameter does not take effect.
   * 
   * @example
   * { "OutputMediaConfig" : { "StorageLocation": "test-bucket.oss-cn-shanghai.aliyuncs.com", "Path": "test-path" }, "OutputMediaTarget": "oss-object", "ReservationTime": "2021-06-21T08:05:00Z" }
   */
  businessConfig?: string;
  /**
   * @remarks
   * The material parameters for the template in JSON format. If TemplateId is specified, ClipsParam must also be specified. For more information about the format, see [Create and use standard templates](https://help.aliyun.com/document_detail/445399.html) and [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
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
   * https://example.com/example.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the cloud editing project.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The materials associated with the project. Separate multiple material IDs with commas (,). You can associate up to 10 material IDs of each type.
   * 
   * @example
   * {"video":"*****2e057304fcd9b145c5cafc*****", "image":"****8021a8d493da643c8acd98*****,*****cb6307a4edea614d8b3f3c*****", "liveStream": "[{\\"appName\\":\\"testrecord\\",\\"domainName\\":\\"test.alivecdn.com\\",\\"liveUrl\\":\\"rtmp://test.alivecdn.com/testrecord/teststream\\",\\"streamName\\":\\"teststream\\"}]", "editingProject": "*****9b145c5cafc2e057304fcd*****"}
   */
  materialMaps?: string;
  /**
   * @remarks
   * The type of the editing project.
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
   * The template ID. You can use a template to quickly build a timeline.
   * >Notice: You must specify either Timeline or TemplateId, but not both. If TemplateId is specified, ClipsParam must also be specified.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The templatetype. This parameter is required when you create a cloud editing project based on a template. Default value: Timeline.
   * Valid values:
   * - Timeline: standard template.
   * - VETemplate: advanced template.
   * 
   * @example
   * Timeline
   */
  templateType?: string;
  /**
   * @remarks
   * The timeline of the cloud editing project in JSON format.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The title of the cloud editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      businessConfig: 'BusinessConfig',
      clipsParam: 'ClipsParam',
      coverURL: 'CoverURL',
      description: 'Description',
      materialMaps: 'MaterialMaps',
      projectType: 'ProjectType',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessConfig: 'string',
      clipsParam: 'string',
      coverURL: 'string',
      description: 'string',
      materialMaps: 'string',
      projectType: 'string',
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

