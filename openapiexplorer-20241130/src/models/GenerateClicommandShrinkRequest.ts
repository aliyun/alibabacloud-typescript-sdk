// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCLICommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  api?: string;
  apiParamsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  apiVersion?: string;
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
      product: 'product',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      apiParamsShrink: 'string',
      apiVersion: 'string',
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

