// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCLICommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  api?: string;
  /**
   * @deprecated
   */
  apiParamsShrink?: string;
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
      apiParamsShrink: 'apiParams',
      apiVersion: 'apiVersion',
      jsonApiParams: 'jsonApiParams',
      product: 'product',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      apiParamsShrink: 'string',
      apiVersion: 'string',
      jsonApiParams: 'string',
      product: 'string',
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

