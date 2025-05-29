// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextEmbeddingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  dimension?: number;
  inputShrink?: string;
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

