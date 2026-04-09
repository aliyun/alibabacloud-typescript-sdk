// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsRequest extends $dara.Model {
  /**
   * @example
   * ECS
   */
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

