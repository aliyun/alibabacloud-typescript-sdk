// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFeatureOptionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FINANCE_51
   */
  featureTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      featureTemplate: 'FeatureTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureTemplate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

