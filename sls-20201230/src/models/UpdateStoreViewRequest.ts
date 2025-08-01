// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StoreViewStore } from "./StoreViewStore";


export class UpdateStoreViewRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the dataset.
   * 
   * Valid values:
   * 
   * *   metricstore
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   logstore
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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
      storeType: 'storeType',
      stores: 'stores',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

