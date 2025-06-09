// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StoreViewStore } from "./StoreViewStore";


export class CreateStoreViewRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.
   * 
   * *   The name can contain lowercase letters, digits, and underscores (_).
   * *   The name must start with a lowercase letter.
   * *   The name must be 3 to 62 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my_storeview
   */
  name?: string;
  /**
   * @remarks
   * The type of the dataset. Valid values: metricstore and logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * logstore
   */
  storeType?: string;
  /**
   * @remarks
   * The Logstores or Metricstores.
   * 
   * This parameter is required.
   */
  stores?: StoreViewStore[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      storeType: 'storeType',
      stores: 'stores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      storeType: 'string',
      stores: { 'type': 'array', 'itemType': StoreViewStore },
    };
  }

  validate() {
    if(Array.isArray(this.stores)) {
      $dara.Model.validateArray(this.stores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

