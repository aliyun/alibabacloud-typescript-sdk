// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The business configuration of the project. This parameter can be ignored for general editing projects.
   * 
   * For a live stream editing project, observe the following rules: OutputMediaConfig.StorageLocation is required. OutputMediaConfig.Path is optional. If you do not specify this option, the live streaming clips are stored in the root directory by default.
   * 
   * Valid values of OutputMediaTarget include vod-media and oss-object. If you do not specify OutputMediaTarget, the default value oss-object is used.
   * 
   * If you set OutputMediaTarget to vod-media, the setting of OutputMediaConfig.Path does not take effect.
   * 
   * @example
   * { "OutputMediaConfig" : { "StorageLocation": "test-bucket.oss-cn-shanghai.aliyuncs.com", "Path": "test-path" }, "OutputMediaTarget": "oss-object", "ReservationTime": "2021-06-21T08:05:00Z" }
   */
  businessConfig?: string;
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
   * https://example.com/example.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the online editing project.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The material associated with the project. Separate multiple material IDs with commas (,). Each type supports up to 10 material IDs.
   * 
   * @example
   * {"video":"*****2e057304fcd9b145c5cafc*****", "image":"****8021a8d493da643c8acd98*****,*****cb6307a4edea614d8b3f3c*****", "liveStream": "[{\\"appName\\":\\"testrecord\\",\\"domainName\\":\\"test.alivecdn.com\\",\\"liveUrl\\":\\"rtmp://test.alivecdn.com/testrecord/teststream\\",\\"streamName\\":\\"teststream\\"}]", "editingProject": "*****9b145c5cafc2e057304fcd*****"}
   */
  materialMaps?: string;
  /**
   * @remarks
   * The type of the editing project. Valid values: EditingProject and LiveEditingProject. A value of EditingProject indicates a regular editing project, and a value of LiveEditingProject indicates a live stream editing project.
   * 
   * @example
   * LiveEditingProject
   */
  projectType?: string;
  /**
   * @remarks
   * The template ID. This parameter is used to quickly build a timeline with ease. Note: Only one of Timeline and TemplateId can be specified. If TemplateId is specified, ClipsParam must also be specified.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The template type. This parameter is required if you create a template-based online editing project. Default value: Timeline. Valid values:
   * 
   * *   Timeline: a regular template.
   * *   VETemplate: an advanced template.
   * 
   * @example
   * Timeline
   */
  templateType?: string;
  /**
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The title of the online editing project.
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

