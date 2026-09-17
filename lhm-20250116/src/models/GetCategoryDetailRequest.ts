// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCategoryDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The list of category paths.
   * 
   * @example
   * /lhm/
   */
  category?: string;
  /**
   * @remarks
   * The source dialect.
   * 
   * @example
   * sparksql
   */
  source?: string;
  /**
   * @remarks
   * The target dialect.
   * 
   * @example
   * hologres
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      source: 'source',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

