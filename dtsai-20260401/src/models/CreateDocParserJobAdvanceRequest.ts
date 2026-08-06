// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CreateDocParserJobAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The format of the input file. Valid values:
   * 
   * - **pdf**: PDF file.
   * 
   * - **docx**: Word file in docx format.
   * 
   * - **doc**: Word file in doc format.
   * 
   * - **pptx**: PPT file in pptx format.
   * 
   * - **ppt**: PPT file in ppt format.
   * 
   * - **txt**: plain text file.
   * 
   * - **md**: Markdown file.
   * 
   * - **png**: PNG image.
   * 
   * - **jpg**: JPG image.
   * 
   * - **jpeg**: JPEG image.
   * 
   * This parameter is required.
   * 
   * @example
   * pdf
   */
  fileFormat?: string;
  /**
   * @remarks
   * The file name, which must include the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * document.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the file to be parsed.
   * >SDKs for various languages provide an additional `CreateDocParserJobAdvance` method that supports passing a local file stream directly (such as InputStream in Java), without the need to upload the file to OSS and construct a FileUrl in advance. When using the Advance method, replace the `FileUrl` parameter (URL string) with the `FileUrlObject` parameter (file stream). All other request parameters remain unchanged. The SDK automatically performs the following operations:
   * >1. Obtains temporary OSS upload credentials.
   * >2. Uploads the file stream directly to OSS.
   * >3. Calls the CreateDocParserJob operation with the generated OSS URL.
   * 
   * @example
   * https://xxx.oss-cn-beijing.aliyuncs.com/document.pdf?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  fileUrlObject?: Readable;
  imageMode?: string;
  /**
   * @remarks
   * The OSS file URL.
   */
  ossFileUrl?: string;
  /**
   * @remarks
   * The output format of the parsing result. Valid values:
   * 
   * - **markdown**: Markdown format.
   * 
   * This parameter is required.
   * 
   * @example
   * markdown
   */
  outputFormat?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resultType?: string;
  tableFormat?: string;
  static names(): { [key: string]: string } {
    return {
      fileFormat: 'FileFormat',
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      imageMode: 'ImageMode',
      ossFileUrl: 'OssFileUrl',
      outputFormat: 'OutputFormat',
      regionId: 'RegionId',
      resultType: 'ResultType',
      tableFormat: 'TableFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFormat: 'string',
      fileName: 'string',
      fileUrlObject: 'Readable',
      imageMode: 'string',
      ossFileUrl: 'string',
      outputFormat: 'string',
      regionId: 'string',
      resultType: 'string',
      tableFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

