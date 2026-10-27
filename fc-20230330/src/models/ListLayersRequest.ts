// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLayersRequest extends $dara.Model {
  /**
   * @remarks
   * The number of layers to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination start token.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether the layer is an official layer. Valid values: true, false.
   * 
   * @example
   * true
   */
  official?: string;
  /**
   * @remarks
   * The layer name prefix.
   * 
   * @example
   * my-layer
   */
  prefix?: string;
  /**
   * @remarks
   * Specifies whether the layer is public. Valid values: true, false.
   * 
   * @example
   * true
   */
  public?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      official: 'official',
      prefix: 'prefix',
      public: 'public',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      official: 'string',
      prefix: 'string',
      public: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

