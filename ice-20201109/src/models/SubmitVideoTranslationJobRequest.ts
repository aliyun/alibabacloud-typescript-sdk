// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoTranslationJobRequest extends $dara.Model {
  /**
   * @remarks
   * *   The client token.
   */
  clientToken?: string;
  /**
   * @remarks
   * *   The job description.
   */
  description?: string;
  /**
   * @remarks
   * *   The configuration parameters of the video translation job.
   * *   The value must be in the JSON format.
   * 
   * @example
   * {"SourceLanguage":"zh","TargetLanguage":"en","DetextArea":"Auto"}
   */
  editingConfig?: string;
  /**
   * @remarks
   * *   The input parameters of the video translation job.
   * *   A video translation job takes a video or subtitle file as the input.
   * *   The value must be in the JSON format.
   * 
   * @example
   * {"Type":"Video","Media":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/xxx.mp4"}
   */
  inputConfig?: string;
  /**
   * @remarks
   * *   The output parameters of the video translation job.
   * *   A video translation job can generate a video or subtitle file as the output.
   * 
   * @example
   * {"MediaURL": "https://your-bucket.oss-cn-shanghai.aliyuncs.com/your-object.mp4"}
   */
  outputConfig?: string;
  signature?: string;
  signatureMehtod?: string;
  signatureNonce?: string;
  signatureType?: string;
  signatureVersion?: string;
  /**
   * @remarks
   * *   The job title.
   */
  title?: string;
  /**
   * @remarks
   * *   The user-defined data.
   * *   The data must be in the JSON format, and can be up to 512 characters in length.
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

