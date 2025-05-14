// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaProducingJobRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The material parameters of the template, in the JSON format. If TemplateId is specified, ClipsParam must also be specified. For more information, see [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html) and [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   */
  clipsParam?: string;
  /**
   * @remarks
   * The parameters for editing and production. For more information, see [EditingProduceConfig](https://help.aliyun.com/document_detail/357745.html).
   * 
   * >  If no thumbnail is specified in EditingProduceConfig, the first frame of the video is used as the thumbnail.
   * 
   * *   AutoRegisterInputVodMedia: specifies whether to automatically register the ApsaraVideo VOD media assets in your timeline with IMS. Default value: true.
   * *   OutputWebmTransparentChannel: specifies whether the output video contains alpha channels. Default value: false.
   * *   CoverConfig: the custom thumbnail parameters.
   * *
   * 
   * @example
   * {
   *       "AutoRegisterInputVodMedia": "true",
   *       "OutputWebmTransparentChannel": "true"
   * }
   */
  editingProduceConfig?: string;
  /**
   * @remarks
   * The metadata of the produced video, in the JSON format. For more information about the parameters, see [MediaMetadata](https://help.aliyun.com/document_detail/357745.html).
   * 
   * @example
   * {
   *       "Title":"test-title",
   *       "Tags":"test-tags1,tags2"
   * }
   */
  mediaMetadata?: string;
  /**
   * @remarks
   * The configurations of the output file, in the JSON format. You can specify an OSS URL or a storage location in a storage bucket of ApsaraVideo VOD.
   * 
   * To store the output file in OSS, you must specify MediaURL. To store the output file in ApsaraVideo VOD, you must specify StorageLocation and FileName.
   * 
   * For more information, see [OutputMediaConfig](https://help.aliyun.com/document_detail/357745.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"MediaURL":"https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4"}
   */
  outputMediaConfig?: string;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * *   oss-object: OSS object in an OSS bucket.
   * *   vod-media: media asset in ApsaraVideo VOD.
   * *   S3: output file based on the Amazon Simple Storage Service (S3) protocol.
   * 
   * @example
   * oss-object
   */
  outputMediaTarget?: string;
  /**
   * @remarks
   * The ID of the editing project.
   * 
   * > : You must specify one of ProgectId, Timeline, and TempalteId and leave the other two parameters empty.
   * 
   * @example
   * xxxxxfb2101cb318xxxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The metadata of the editing project, in the JSON format. For more information about the parameters, see [ProjectMetadata](https://help.aliyun.com/document_detail/357745.html).
   */
  projectMetadata?: string;
  /**
   * @remarks
   * The source of the editing and production request. Valid values:
   * 
   * *   OpenAPI
   * *   AliyunConsole
   * *   WebSDK
   * 
   * @example
   * OPENAPI
   */
  source?: string;
  /**
   * @remarks
   * The template ID. The template is used to build a timeline with ease.
   * 
   * > : You must specify one of ProgectId, Timeline, and TempalteId and leave the other two parameters empty. If TemplateId is specified, ClipsParam must also be specified.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  timeline?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format, which can be up to 512 bytes in length. You can specify a custom callback URL. For more information, see [Configure a callback upon editing completion](https://help.aliyun.com/document_detail/451631.html).
   * 
   * @example
   * {"NotifyAddress":"https://xx.com/xx","RegisterMediaNotifyAddress":"https://xxx.com/xx"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clipsParam: 'ClipsParam',
      editingProduceConfig: 'EditingProduceConfig',
      mediaMetadata: 'MediaMetadata',
      outputMediaConfig: 'OutputMediaConfig',
      outputMediaTarget: 'OutputMediaTarget',
      projectId: 'ProjectId',
      projectMetadata: 'ProjectMetadata',
      source: 'Source',
      templateId: 'TemplateId',
      timeline: 'Timeline',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clipsParam: 'string',
      editingProduceConfig: 'string',
      mediaMetadata: 'string',
      outputMediaConfig: 'string',
      outputMediaTarget: 'string',
      projectId: 'string',
      projectMetadata: 'string',
      source: 'string',
      templateId: 'string',
      timeline: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

