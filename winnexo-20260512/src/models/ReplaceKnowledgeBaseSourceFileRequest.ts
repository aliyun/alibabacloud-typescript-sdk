// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceKnowledgeBaseSourceFileRequest extends $dara.Model {
  /**
   * @remarks
   * The new file name. This parameter is optional. If this parameter is not provided or set to an empty string, the original file name is retained.
   * 
   * @example
   * example.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The OSS persistent storage address of the replacement file.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  filePath?: string;
  /**
   * @remarks
   * The public access URL of the new file. The URL may contain a temporary signature.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * The file record ID of the replacement file.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * Specifies whether to synchronously wait for re-parsing to complete. Default value: false, which indicates asynchronous queuing.
   * 
   * @example
   * false
   */
  forceSync?: boolean;
  /**
   * @remarks
   * The ID of the FILE data source in the enterprise knowledge base to be replaced.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this parameter explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      filePath: 'filePath',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      forceSync: 'forceSync',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      filePath: 'string',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      forceSync: 'boolean',
      sourceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

