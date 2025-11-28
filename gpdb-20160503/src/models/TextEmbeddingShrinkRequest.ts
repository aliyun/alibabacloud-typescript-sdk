// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextEmbeddingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The number of embedding dimensions. The default value is the number of dimensions supported by the embedding algorithm.
   * 
   * > 
   * 
   * *   The text-embedding-v3 supports 1024, 768, and 512 dimensions. Default value: 1024.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * A list of text content to be embedded. The list length must not exceed 100.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The text embedding model. Valid values:
   * 
   * *   text-embedding-v1:1536 dimensions
   * *   text-embedding-v2:1536 dimensions
   * *   text-embedding-v3 (default):1024, 768, and 512 dimensions
   * *   text2vec: 1024 dimensions
   * *   m3e-base: 768 dimensions
   * *   m3e-small: 512 dimensions
   * 
   * @example
   * text-embedding-v2
   */
  model?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
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
      inputShrink: 'Input',
      model: 'Model',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dimension: 'number',
      inputShrink: 'string',
      model: 'string',
      ownerId: 'number',
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

