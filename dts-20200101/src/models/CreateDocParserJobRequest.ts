// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocParserJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the document to be parsed.
   * 
   * > The name must include the file name extension. Only .pdf is supported.
   * 
   * @example
   * 2.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The OSS URL of the document to be parsed.
   * 
   * > This parameter is automatically populated when you use an SDK to call this operation.
   * 
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com/storage/pdf/40184458-fbb0-44cf-a391-350628ceccdd17375122****
   */
  fileUrl?: string;
  ragInstanceId?: string;
  /**
   * @remarks
   * The region ID of the document parsing task. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The format of the output result after the parsing task is completed. Valid values:
   * 
   * - **zip**: ZIP archive.
   * - **content**: Plain text.
   * 
   * @example
   * zip
   */
  resultType?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      ragInstanceId: 'RagInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resultType: 'ResultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      ragInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resultType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

