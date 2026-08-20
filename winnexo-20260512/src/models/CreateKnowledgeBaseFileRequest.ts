// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseFileRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the alias.
   * 
   * @example
   * hangzhou-release-version-3-eventbridge-numeric-queue-fix-20260529
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The file name extension. This parameter is optional. Examples: pdf and docx.
   * 
   * @example
   * string_value
   */
  fileExt?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * BasicSimilarityScorer.cava
   */
  fileName?: string;
  /**
   * @remarks
   * The file path.
   * 
   * This parameter is required.
   * 
   * @example
   * bi/batch-query-service.app.yaml
   */
  filePath?: string;
  /**
   * @remarks
   * The publicly accessible URL of the DingTalk online document.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * The file record ID. This parameter is optional and corresponds to settings.file_record_id.
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * Not supported. Ignore this parameter.
   * 
   * @example
   * exampleKnowledgeId
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The name of the AI assistant.
   * 
   * This parameter is required.
   * 
   * @example
   * oklabs_tongyici
   */
  name?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name). This parameter is optional.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The resource labels. This parameter is optional. Specify a JSON string list, such as ["tagA","tagB"].
   * 
   * @example
   * string_value
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 692318833855074
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      fileExt: 'fileExt',
      fileName: 'fileName',
      filePath: 'filePath',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      knowledgeId: 'knowledgeId',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      fileExt: 'string',
      fileName: 'string',
      filePath: 'string',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      knowledgeId: 'string',
      name: 'string',
      operatingObjectName: 'string',
      sourceTags: 'string',
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

