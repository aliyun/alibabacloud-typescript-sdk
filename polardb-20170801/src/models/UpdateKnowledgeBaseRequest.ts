// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @example
   * test desc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * balanced
   */
  searchMode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      knowledgeBaseId: 'KnowledgeBaseId',
      name: 'Name',
      regionId: 'RegionId',
      searchMode: 'SearchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      knowledgeBaseId: 'string',
      name: 'string',
      regionId: 'string',
      searchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

