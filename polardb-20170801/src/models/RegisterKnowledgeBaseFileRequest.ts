// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterKnowledgeBaseFileRequest extends $dara.Model {
  /**
   * @remarks
   * The OSS object key of the uploaded file, excluding the oss://BucketName/ prefix.
   * 
   * This parameter is required.
   * 
   * @example
   * pks-2ze123456789abcd/pkb-2ze123456789abcd/example.pdf
   */
  filePath?: string;
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-2ze123456789abcd
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The ID of the region where the knowledge base resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      knowledgeBaseId: 'KnowledgeBaseId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      knowledgeBaseId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

