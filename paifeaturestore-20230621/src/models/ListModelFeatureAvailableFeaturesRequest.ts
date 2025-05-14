// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelFeatureAvailableFeaturesRequest extends $dara.Model {
  /**
   * @example
   * f1
   */
  featureName?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

