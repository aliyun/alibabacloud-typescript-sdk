// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKnowledgeBaseFileRequest extends $dara.Model {
  /**
   * @remarks
   * The file ID. To delete multiple files at a time, separate the file IDs with commas (,). A maximum of 500 file IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  fileId?: string;
  /**
   * @remarks
   * The unique ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
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
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      knowledgeBaseId: 'KnowledgeBaseId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
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

