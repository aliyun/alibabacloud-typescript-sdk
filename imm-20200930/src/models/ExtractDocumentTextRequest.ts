// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";


export class ExtractDocumentTextRequest extends $dara.Model {
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/477051.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The type of the filename extension of the source data. By default, the filename extension of the source data is the same as the filename extension of the input document. If the input document has no extension, you can specify this parameter. Valid values:
   * 
   * *   Text documents: doc, docx, wps, wpss, docm, dotm, dot, dotx, and html
   * *   Presentation documents: pptx, ppt, pot, potx, pps, ppsx, dps, dpt, pptm, potm, ppsm, and dpss
   * *   Table documents: xls, xlt, et, ett, xlsx, xltx, csv, xlsb, xlsm, xltm, and ets
   * *   PDF documents: pdf.
   * 
   * @example
   * docx
   */
  sourceType?: string;
  /**
   * @remarks
   * The URI of the Object Storage Service (OSS) bucket in which the document is stored.
   * 
   * Specify the value in the oss://${Bucket}/${Object} format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region as the current project. `${Object}` specifies the complete path to the file that has an extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceType: 'SourceType',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      sourceType: 'string',
      sourceURI: 'string',
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

