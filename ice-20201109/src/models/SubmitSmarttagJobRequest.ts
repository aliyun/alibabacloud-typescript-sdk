// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmarttagJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * - If you set the `Type` parameter to `OSS`, specify the OSS URL of the media file. Example: `OSS://test-bucket/video/202208/test.mp4`.
   * 
   * - If you set the `Type` parameter to `Media`, specify the media ID. Example: `c5c62d8f0361337cab312dce8e77dc6d`.
   * 
   * - If you set the `Type` parameter to `URL`, specify the HTTP or HTTPS URL of the media file. Example: `https://zc-test.oss-cn-shanghai.aliyuncs.com/test/unknowFace.mp4`.
   * 
   * @example
   * c5c62d8f0361337cab312dce8e77dc6d
   */
  media?: string;
  /**
   * @remarks
   * The type of the input media file. Valid values:
   * 
   * - OSS
   * 
   * - Media
   * 
   * - URL
   * 
   * @example
   * Media
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmarttagJobRequestScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the pipeline. Pipelines separate business workloads and bind message notifications.
   * 
   * If you do not specify this parameter, the default pipeline is used. The default pipeline has a concurrency of 2. To increase the concurrency, submit a ticket.
   * 
   * @example
   * acdbfe4323bcfdae
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job. This feature is not yet implemented. You can leave this parameter empty or specify any value.
   * 
   * @example
   * 4
   */
  priority?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmarttagJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the video content can contain Chinese characters, English letters, digits, and hyphens (-). It cannot start with a special character and must not exceed 1 KB.
   * 
   * @example
   * example content ****
   */
  content?: string;
  /**
   * @remarks
   * Deprecated.
   */
  contentAddr?: string;
  /**
   * @remarks
   * Deprecated.
   */
  contentType?: string;
  /**
   * @remarks
   * The input file for the job.
   */
  input?: SubmitSmarttagJobRequestInput;
  /**
   * @remarks
   * The callback URL. Only HTTP and HTTPS URLs are supported.
   * 
   * @example
   * https://example.com/endpoint/aliyun/ai?id=76401125000***
   */
  notifyUrl?: string;
  /**
   * @remarks
   * Additional request parameters, specified as a JSON string. For example: `{"needAsrData":true, "needOcrData":false}`.
   * 
   * - `needAsrData`: Specifies whether to include the raw Automatic Speech Recognition (ASR) results in the analysis output. The default is `false`.
   * 
   * - `needOcrData`: Specifies whether to include the raw Optical Character Recognition (OCR) results in the analysis output. The default is `false`.
   * 
   * - `needMetaData`: Specifies whether to include metadata in the analysis output. The default is `false`.
   * 
   * - `nlpParams`: A JSON object that specifies the input parameters for the Natural Language Processing (NLP) operator. If left empty, the operator is not used. For details, see the `nlpParams` table below.
   * 
   * @example
   * {"needAsrData":true, "needOcrData":false, "nlpParams":{"sourceLanguage":"cn"}}
   */
  params?: string;
  /**
   * @remarks
   * The scheduling configurations.
   */
  scheduleConfig?: SubmitSmarttagJobRequestScheduleConfig;
  /**
   * @remarks
   * Dynamic parameters for the job, which temporarily override or supplement the base template specified by `TemplateId`. The service merges the dynamic and template parameters to generate the final configuration for the current job and validates it before execution.
   * 
   * - Merge rules:
   * 
   * 1. Values in the request override corresponding values in the template.
   * 
   * 2. Fields in the request that do not exist in the template are added to the configuration.
   * 
   * - Currently supported dynamic fields:
   * 
   * 1. `FaceCategoryIds`: A list of face library IDs for recognition, separated by commas (,). You can include both system and custom library IDs.
   * 
   * - Note: These dynamic parameters affect only the current job and do not modify the template itself.
   * 
   * @example
   * {"FaceCategoryIds":"custom_face_lib1"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The ID of the template that specifies the analysis algorithms to use.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4
   */
  templateId?: string;
  /**
   * @remarks
   * The video title can contain Chinese characters, English letters, digits, and hyphens (-). It cannot start with a special character and must not exceed 256 bytes.
   * 
   * @example
   * example-title-****
   */
  title?: string;
  /**
   * @remarks
   * Custom data to include in the callback. If you use Message Service (MNS) for callbacks, this data is included in the message. The maximum length is 1 KB.
   * 
   * @example
   * {“a”:"test"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentAddr: 'ContentAddr',
      contentType: 'ContentType',
      input: 'Input',
      notifyUrl: 'NotifyUrl',
      params: 'Params',
      scheduleConfig: 'ScheduleConfig',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentAddr: 'string',
      contentType: 'string',
      input: SubmitSmarttagJobRequestInput,
      notifyUrl: 'string',
      params: 'string',
      scheduleConfig: SubmitSmarttagJobRequestScheduleConfig,
      templateConfig: 'string',
      templateId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

