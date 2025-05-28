// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetListResponseBodyResultDataDataSource extends $dara.Model {
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * @example
   * 261b252d-c3c3-498a-a0a7-5d1ec6cd****
   */
  dsId?: string;
  /**
   * @remarks
   * The time when the scaling group was modified.
   * 
   * @example
   * The name of the training dataset.
   */
  dsName?: string;
  /**
   * @remarks
   * The user ID of the dataset owner in the Quick BI.
   * 
   * @example
   * mysql
   */
  dsType?: string;
  static names(): { [key: string]: string } {
    return {
      dsId: 'DsId',
      dsName: 'DsName',
      dsType: 'DsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsId: 'string',
      dsName: 'string',
      dsType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

