// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextEmbeddingRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The vector dimensions. Default value: the dimensions supported by the embedding model.
   * 
   * > 
   * > - text-embedding-v3 supports 1024, 768, and 512 dimensions. Default value: 1024.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * The list of text content to vectorize. The list can contain up to 100 entries.
   * 
   * @example
   * What is ADBPG?
   */
  input?: string[];
  /**
   * @remarks
   * The embedding model. Valid values:
   * - text-embedding-v1: 1536 dimensions
   * - text-embedding-v2: 1536 dimensions
   * - text-embedding-v3 (default): 1024, 768, or 512 dimensions
   * - text2vec (not recommended): 1024 dimensions
   * - m3e-base (not recommended): 768 dimensions
   * - m3e-small (not recommended): 512 dimensions
   * 
   * @example
   * text-embedding-v3
   */
  model?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dimension: 'Dimension',
      input: 'Input',
      model: 'Model',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dimension: 'number',
      input: { 'type': 'array', 'itemType': 'string' },
      model: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.input)) {
      $dara.Model.validateArray(this.input);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

