// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow to which the file belongs.
   * 
   * @example
   * 74328
   */
  businessId?: number;
  /**
   * @remarks
   * The latest version number of the file.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * The name of the data source with which the file is associated.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The ID of the folder to which the file belongs. You can call the [GetFolder](https://help.aliyun.com/document_detail/173952.html) operation to query the details of the file based on the folder ID.
   * 
   * @example
   * aldurie78l2falure
   */
  folderId?: string;
  /**
   * @remarks
   * The file owner.
   * 
   * @example
   * 7384234****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the do-while node or for-each node that corresponds to the file.
   * 
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

