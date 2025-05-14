// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFeatureViewRequestFieldsTransform } from "./CreateFeatureViewRequestFieldsTransform";


export class CreateFeatureViewRequestFields extends $dara.Model {
  attributes?: string[];
  /**
   * @example
   * age
   */
  name?: string;
  transform?: CreateFeatureViewRequestFieldsTransform[];
  /**
   * @example
   * INT32
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
      transform: { 'type': 'array', 'itemType': CreateFeatureViewRequestFieldsTransform },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    if(Array.isArray(this.transform)) {
      $dara.Model.validateArray(this.transform);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

