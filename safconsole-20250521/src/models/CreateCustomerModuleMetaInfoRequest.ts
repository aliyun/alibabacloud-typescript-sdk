// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerModuleMetaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Customer model ID.
   * 
   * @example
   * 1
   */
  customerModuleId?: number;
  /**
   * @remarks
   * A string representation of List<Object>, where Object has the following structure:
   * {
   * "mappingName": "xxx"
   * }
   * 
   * @example
   * {\\"mappingName\\":\\"f1\\",\\"fieldName\\":\\"saf_shanghai_new.f1\\",\\"valueType\\":\\"DOUBLE\\",\\"defaultValue\\":\\"\\"}
   */
  featureString?: string;
  /**
   * @remarks
   * Version of the feature adopted.
   * 
   * @example
   * FINANCE_51
   */
  featureTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      customerModuleId: 'CustomerModuleId',
      featureString: 'FeatureString',
      featureTemplate: 'FeatureTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerModuleId: 'number',
      featureString: 'string',
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

