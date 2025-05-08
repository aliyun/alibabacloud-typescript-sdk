// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsResponseBodyCustomSemanticSearchConfig extends $dara.Model {
  /**
   * @example
   * 3
   */
  datasetQuota?: number;
  /**
   * @example
   * 1
   */
  datasetUsedQuota?: number;
  /**
   * @example
   * 1000
   */
  docQuota?: number;
  /**
   * @example
   * 1
   */
  docUsedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      datasetQuota: 'DatasetQuota',
      datasetUsedQuota: 'DatasetUsedQuota',
      docQuota: 'DocQuota',
      docUsedQuota: 'DocUsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetQuota: 'number',
      datasetUsedQuota: 'number',
      docQuota: 'number',
      docUsedQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

