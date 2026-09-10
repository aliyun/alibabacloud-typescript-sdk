// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTerraformPricingMappingsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body. The resourceTypes field specifies a list of Terraform resource types, such as alicloud_instance. You can specify a maximum of 200 resource types in a single request.
   * 
   * @example
   * {
   *   "resourceTypes": [
   *     "alicloud_instance",
   *     "alicloud_vpc"
   *   ]
   * }
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

