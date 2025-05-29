// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextEmbeddingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  dimension?: number;
  input?: string[];
  /**
   * @example
   * text-embedding-v2
   */
  model?: string;
  ownerId?: number;
  /**
   * @remarks
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

