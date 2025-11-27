// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtractDocumentTextShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **If there are no special requirements, leave it blank.**
   * 
   * Chain authorization configuration, optional. For more information, see [Using Chain Authorization to Access Other Entity Resources](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * Project name. For how to obtain it, see [Creating a Project](https://help.aliyun.com/document_detail/477051.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * Suffix type of the source data. By default, the type of the source data is determined based on the suffix of the input object. When the input object does not have a suffix, you can set this parameter. The available values are as follows:
   * 
   * - Word Documents: doc, docx, wps, wpss, docm, dotm, dot, dotx, html
   * - Presentation Documents (PPT): pptx, ppt, pot, potx, pps, ppsx, dps, dpt, pptm, potm, ppsm, dpss
   * - Spreadsheet Documents (Excel): xls, xlt, et, ett, xlsx, xltx, csv, xlsb, xlsm, xltm, ets
   * - PDF Documents: pdf
   * 
   * @example
   * docx
   */
  sourceType?: string;
  /**
   * @remarks
   * Storage address of the source data.
   * 
   * The OSS address rule is oss://${Bucket}/${Object}, where `${Bucket}` is the name of the OSS Bucket in the same region (Region) as the current project, and `${Object}` is the complete path of the file including the file extension.
   * >Notice: Currently, only HTTP protocol addresses are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceType: 'SourceType',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      projectName: 'string',
      sourceType: 'string',
      sourceURI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

