// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DescribeRegions
   */
  api?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2014-05-26
   */
  apiVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'api',
      apiVersion: 'apiVersion',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      apiVersion: 'string',
      product: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

