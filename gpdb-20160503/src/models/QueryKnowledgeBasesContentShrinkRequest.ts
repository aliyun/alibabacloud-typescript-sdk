// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryKnowledgeBasesContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * RRF
   */
  mergeMethod?: string;
  mergeMethodArgsShrink?: string;
  ownerId?: number;
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
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceCollectionShrink?: string;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      DBInstanceId: 'DBInstanceId',
      mergeMethod: 'MergeMethod',
      mergeMethodArgsShrink: 'MergeMethodArgs',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      rerankFactor: 'RerankFactor',
      sourceCollectionShrink: 'SourceCollection',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      DBInstanceId: 'string',
      mergeMethod: 'string',
      mergeMethodArgsShrink: 'string',
      ownerId: 'number',
      regionId: 'string',
      rerankFactor: 'number',
      sourceCollectionShrink: 'string',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

