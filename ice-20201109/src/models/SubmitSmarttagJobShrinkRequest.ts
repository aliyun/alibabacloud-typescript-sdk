// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmarttagJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the video content. It supports Chinese characters, English letters, digits, and hyphens (-). It cannot start with a special character and can be up to 1 KB in length.
   * 
   * @example
   * example content ****
   */
  content?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated.
   * 
   * @example
   * This parameter is deprecated
   */
  contentAddr?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated.
   * 
   * @example
   * This parameter is deprecated
   */
  contentType?: string;
  /**
   * @remarks
   * input
   */
  inputShrink?: string;
  /**
   * @remarks
   * The callback URL. Only HTTP and HTTPS are supported.
   * 
   * @example
   * https://example.com/endpoint/aliyun/ai?id=76401125000***
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The additional request parameters, represented as a JSON string. Example: {"needAsrData":true, "needOcrData":false}. Field descriptions:
   * 
   * - needAsrData: a Boolean value that specifies whether to include the original ASR results in the analysis results. Default value: false. Set the value to true to include the original ASR results.
   * 
   * - needOcrData: a Boolean value that specifies whether to include the original OCR results in the analysis results. Default value: false. Set the value to true to include the original OCR results.
   * 
   * - needMetaData: a Boolean value that specifies whether to include metadata in the analysis results. Default value: false. Set the value to true to include metadata.
   * 
   * - nlpParams: a JSON object that specifies the input parameters for the NLP operator. Default value: empty (the NLP operator is not used). For more information, see the supplementary description of request parameters below.
   * 
   * @example
   * {"needAsrData":true, "needOcrData":false, "nlpParams":{"sourceLanguage":"cn"}}
   */
  params?: string;
  /**
   * @remarks
   * scheduleConfig
   */
  scheduleConfigShrink?: string;
  /**
   * @remarks
   * The template parameters that are dynamically passed when the job is started. These parameters are used to temporarily override or supplement the configured parameters in the template specified by TemplateId. The server merges these parameters with the original template parameters by field to generate the final template configuration for the current job, and validates the configuration before execution.
   * 
   * - Merge rules:
   * 1. If a field already exists in the template, the value provided by the caller overrides the template value (caller takes precedence).
   * 2. If a field does not exist in the template, it is appended as a new field.
   * 
   * - Supported dynamic fields:
   * 
   * 1. FaceCategoryIds: the list of face library IDs that participate in recognition (separated by commas, which can include system library IDs and custom library IDs).
   * 
   * - Precautions:
   * This configuration affects only the execution of the current job and does not modify the template itself.
   * 
   * @example
   * {"FaceCategoryIds":"custom_face_lib1"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The ID of the template that is used to specify the analysis algorithm.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4
   */
  templateId?: string;
  /**
   * @remarks
   * The video title. It supports Chinese characters, English letters, digits, and hyphens (-). It cannot start with a special character and can be up to 256 bytes in length.
   * 
   * @example
   * example-title-****
   */
  title?: string;
  /**
   * @remarks
   * The custom data that is returned in an MNS callback. It can be up to 1 KB in length. For more information about how to configure an MNS callback queue, see the relevant documentation.
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

