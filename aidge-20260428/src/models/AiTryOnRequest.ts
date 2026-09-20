// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiTryOnRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/cloth.png
   */
  clothImageUrl?: string;
  /**
   * @example
   * tops
   */
  clothType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/model.png
   */
  modelImageUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1K
   */
  resolution?: string;
  static names(): { [key: string]: string } {
    return {
      clothImageUrl: 'ClothImageUrl',
      clothType: 'ClothType',
      modelImageUrl: 'ModelImageUrl',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothImageUrl: 'string',
      clothType: 'string',
      modelImageUrl: 'string',
      resolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

