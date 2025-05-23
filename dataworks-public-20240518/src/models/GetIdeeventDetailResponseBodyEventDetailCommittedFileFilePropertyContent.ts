// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent extends $dara.Model {
  /**
   * @example
   * 74328
   */
  businessId?: number;
  /**
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @example
   * aldurie78l2falure
   */
  folderId?: string;
  /**
   * @example
   * 7384234****
   */
  owner?: string;
  /**
   * @example
   * 1234122
   */
  parentFileId?: number;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      currentVersion: 'CurrentVersion',
      dataSourceName: 'DataSourceName',
      folderId: 'FolderId',
      owner: 'Owner',
      parentFileId: 'ParentFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      currentVersion: 'number',
      dataSourceName: 'string',
      folderId: 'string',
      owner: 'string',
      parentFileId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

