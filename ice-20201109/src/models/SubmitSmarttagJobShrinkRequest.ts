// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmarttagJobShrinkRequest extends $dara.Model {
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
  inputShrink?: string;
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
  scheduleConfigShrink?: string;
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
      inputShrink: 'Input',
      notifyUrl: 'NotifyUrl',
      params: 'Params',
      scheduleConfigShrink: 'ScheduleConfig',
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
      inputShrink: 'string',
      notifyUrl: 'string',
      params: 'string',
      scheduleConfigShrink: 'string',
      templateConfig: 'string',
      templateId: 'string',
      title: 'string',
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

