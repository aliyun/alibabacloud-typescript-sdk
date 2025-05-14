// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmarttagJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The video description. The description can contain letters, digits, and hyphens (-) and cannot start with a special character. The description can be up to 1 KB in length.
   * 
   * @example
   * example content ****
   */
  content?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * @example
   * http://123.com/testVideo.mp4
   */
  contentAddr?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * @example
   * application/zip
   */
  contentType?: string;
  /**
   * @remarks
   * The job input.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The URL for receiving callbacks. Set the value to an HTTP URL or an HTTPS URL.
   * 
   * @example
   * https://example.com/endpoint/aliyun/ai?id=76401125000***
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The additional request parameters. The value is a JSON string. Example: {"needAsrData":true, "needOcrData":false}. The following parameters are supported:
   * 
   * *   needAsrData: specifies whether to query the automatic speech recognition (ASR) data. The value is of the BOOLEAN type. Default value: false. Valid values: true and false.
   * *   needOcrData: specifies whether to query the optical character recognition (OCR) data. The value is of the BOOLEAN type. Default value: false. Valid values: true and false.
   * *   needMetaData: specifies whether to query the metadata. The value is of the BOOLEAN type. Default value: false. Valid values: true and false.
   * *   nlpParams: the input parameters of the natural language processing (NLP) operator. The value is a JSON object. This parameter is empty by default, which indicates that the NLP operator is not used. For more information, see the "nlpParams" section of this topic.
   * 
   * @example
   * {"needAsrData":true, "needOcrData":false}
   */
  params?: string;
  /**
   * @remarks
   * The scheduling configurations.
   */
  scheduleConfigShrink?: string;
  /**
   * @remarks
   * The ID of the template that specifies the analysis algorithms. For more information about template operations, see [Configure templates](https://help.aliyun.com/document_detail/445702.html).
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4
   */
  templateId?: string;
  /**
   * @remarks
   * The video title. The title can contain letters, digits, and hyphens (-) and cannot start with a special character. The title can be up to 256 bytes in length.
   * 
   * @example
   * example-title-****
   */
  title?: string;
  /**
   * @remarks
   * The data to be passed through Simple Message Queue (SMQ, formerly MNS) during callbacks. The data can be up to 1 KB in length. For more information about how to specify an SMQ queue for receiving callbacks, see UpdatePipeline.
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

