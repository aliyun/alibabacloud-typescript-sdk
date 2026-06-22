// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the release batch.
   * 
   * @example
   * 批次1
   */
  batchName?: string;
  /**
   * @remarks
   * The page number of the current page when paging is used.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page when paging is used.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The target version to upgrade to.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.9
   */
  upgradeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      batchName: 'BatchName',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      upgradeVersion: 'UpgradeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchName: 'string',
      currentPage: 'number',
      pageSize: 'number',
      upgradeVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

