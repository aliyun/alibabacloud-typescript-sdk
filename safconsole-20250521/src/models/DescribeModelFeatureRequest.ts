// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelFeatureRequest extends $dara.Model {
  /**
   * @example
   * 456
   */
  customerModuleId?: number;
  /**
   * @example
   * FINANCE_51
   */
  featureTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      customerModuleId: 'CustomerModuleId',
      featureTemplate: 'FeatureTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerModuleId: 'number',
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

