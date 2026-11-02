// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoTranslationJobRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request.
   * 
   * @example
   * Test ClientToken
   */
  clientToken?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * Test Description
   */
  description?: string;
  /**
   * @remarks
   * The configuration parameters for the video translation task. Must be in JSON format.
   * 
   * @example
   * {"SourceLanguage":"zh","TargetLanguage":"en","DetextArea":"Auto"}
   */
  editingConfig?: string;
  /**
   * @remarks
   * The input parameters for the video translation task.
   * - Supports videos and subtitle files as input.
   * - Must be in JSON format.
   * 
   * @example
   * {"Type":"Video","Video":"1628ae20c36******8f6f7c77a6302"}
   */
  inputConfig?: string;
  /**
   * @remarks
   * The output parameters for the video translation task. Supports video and subtitle file types as output.
   * 
   * @example
   * {"MediaURL": "https://your-bucket.oss-cn-shanghai.aliyuncs.com/your-object.mp4"}
   */
  outputConfig?: string;
  signature?: string;
  /**
   * @remarks
   * Automatically populated. You do not need to specify this parameter.
   * 
   * @example
   * Auto-complete, no need to write
   */
  signatureMehtod?: string;
  signatureNonce?: string;
  /**
   * @remarks
   * Automatically populated. You do not need to specify this parameter.
   * 
   * @example
   * Auto-complete, no need to write
   */
  signatureType?: string;
  signatureVersion?: string;
  /**
   * @remarks
   * The task title.
   * 
   * @example
   * Test Title
   */
  title?: string;
  /**
   * @remarks
   * The custom information in JSON format. The maximum length is 512 bytes.
   * - [Supports custom callback URL configuration](https://help.aliyun.com/document_detail/451631.html)
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

