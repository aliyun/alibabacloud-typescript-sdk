// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCLICommandRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  api?: string;
  /**
   * @deprecated
   */
  apiParams?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  apiVersion?: string;
  jsonApiParams?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  product?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'api',
      apiParams: 'apiParams',
      apiVersion: 'apiVersion',
      jsonApiParams: 'jsonApiParams',
      product: 'product',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      apiParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      apiVersion: 'string',
      jsonApiParams: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.apiParams) {
      $dara.Model.validateMap(this.apiParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

