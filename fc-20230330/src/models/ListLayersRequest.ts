// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLayersRequest extends $dara.Model {
  /**
   * @remarks
   * The number of layers that are returned
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether the layer is official. Valid values: true and false.
   * 
   * @example
   * true
   */
  official?: string;
  /**
   * @remarks
   * The name prefix of the layer.
   * 
   * @example
   * my-layer
   */
  prefix?: string;
  /**
   * @remarks
   * Specifies whether the layer is public. Valid values: true and false.
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

