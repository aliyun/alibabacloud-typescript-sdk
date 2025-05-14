// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelFeatureRequestFeatures extends $dara.Model {
  /**
   * @example
   * userid
   */
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  featureViewId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_id
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      featureViewId: 'FeatureViewId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      featureViewId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

