// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionRestrictionsRequest extends $dara.Model {
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * native
   */
  modelType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * user
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      modelType: 'modelType',
      region: 'region',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelType: 'string',
      region: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

