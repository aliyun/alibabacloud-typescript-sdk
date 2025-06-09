// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStoreViewsRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset name that is used for fuzzy match.
   * 
   * @example
   * my_storeview
   */
  name?: string;
  /**
   * @remarks
   * The offset of the datasets to return. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of datasets to return. Default value: 100.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The type of the datasets to return. By default, datasets are not filtered by type.
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
   * @example
   * logstore
   */
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      offset: 'offset',
      size: 'size',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      offset: 'number',
      size: 'number',
      storeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

