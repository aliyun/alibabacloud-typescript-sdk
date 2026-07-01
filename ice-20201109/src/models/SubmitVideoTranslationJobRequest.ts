// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoTranslationJobRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request.
   * 
   * @example
   * Test ClientToken
   */
  clientToken?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * Test description
   */
  description?: string;
  /**
   * @remarks
   * Configuration parameters for the video translation job, specified as a JSON string.
   * 
   * @example
   * {"SourceLanguage":"zh","TargetLanguage":"en","DetextArea":"Auto"}
   */
  editingConfig?: string;
  /**
   * @remarks
   * The input parameters for the video translation job.
   * 
   * - The input can be a video or a subtitle file.
   * 
   * - The value must be a JSON string.
   * 
   * @example
   * {"Type":"Video","Video":"1628ae20c36******8f6f7c77a6302"}
   */
  inputConfig?: string;
  /**
   * @remarks
   * Output parameters for the video translation job. The output can be a video or a subtitle file.
   * 
   * @example
   * {"MediaURL": "https://your-bucket.oss-cn-shanghai.aliyuncs.com/your-object.mp4"}
   */
  outputConfig?: string;
  signature?: string;
  /**
   * @remarks
   * The system automatically populates this parameter. You do not need to set it.
   * 
   * @example
   * Auto-complete, no need to write
   */
  signatureMehtod?: string;
  signatureNonce?: string;
  /**
   * @remarks
   * The system automatically populates this parameter. You do not need to set it.
   * 
   * @example
   * Auto-complete, no need to write
   */
  signatureType?: string;
  signatureVersion?: string;
  /**
   * @remarks
   * The job title.
   * 
   * @example
   * Test title
   */
  title?: string;
  /**
   * @remarks
   * User data for the job, provided as a JSON string. The string can be up to 512 bytes long.
   * 
   * - Use this parameter to [configure a custom callback URL](https://help.aliyun.com/document_detail/451631.html).
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      outputConfig: 'OutputConfig',
      signature: 'Signature',
      signatureMehtod: 'SignatureMehtod',
      signatureNonce: 'SignatureNonce',
      signatureType: 'SignatureType',
      signatureVersion: 'SignatureVersion',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      editingConfig: 'string',
      inputConfig: 'string',
      outputConfig: 'string',
      signature: 'string',
      signatureMehtod: 'string',
      signatureNonce: 'string',
      signatureType: 'string',
      signatureVersion: 'string',
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

