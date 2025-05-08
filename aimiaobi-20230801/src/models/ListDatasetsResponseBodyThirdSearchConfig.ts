// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsResponseBodyThirdSearchConfig extends $dara.Model {
  /**
   * @example
   * 2
   */
  datasetQuota?: number;
  /**
   * @example
   * 1
   */
  datasetUsedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      datasetQuota: 'DatasetQuota',
      datasetUsedQuota: 'DatasetUsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetQuota: 'number',
      datasetUsedQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

