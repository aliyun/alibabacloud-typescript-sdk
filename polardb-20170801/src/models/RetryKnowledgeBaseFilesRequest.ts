// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryKnowledgeBaseFilesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 91b97b71-xxxx-xxxx-xxxx-33c6a6341cdc
   */
  fileIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileIds: 'FileIds',
      knowledgeBaseId: 'KnowledgeBaseId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileIds: 'string',
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

