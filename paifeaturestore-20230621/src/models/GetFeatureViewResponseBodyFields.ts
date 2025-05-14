// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFeatureViewResponseBodyFieldsTransform } from "./GetFeatureViewResponseBodyFieldsTransform";


export class GetFeatureViewResponseBodyFields extends $dara.Model {
  attributes?: string[];
  /**
   * @example
   * user
   */
  name?: string;
  transform?: GetFeatureViewResponseBodyFieldsTransform;
  /**
   * @example
   * int
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      transform: 'Transform',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      transform: GetFeatureViewResponseBodyFieldsTransform,
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    if(this.transform && typeof (this.transform as any).validate === 'function') {
      (this.transform as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

