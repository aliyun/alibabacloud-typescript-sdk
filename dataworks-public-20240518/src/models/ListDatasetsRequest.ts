// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequest extends $dara.Model {
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 12103XXX46492139
   */
  creatorId?: string;
  /**
   * @remarks
   * The data type. Multiple selections are allowed. Valid values:
   * 
   * *   COMMON
   * *   PIC
   * *   TEXT
   * *   TABLE
   * *   VIDEO
   * *   AUDIO
   * *   INDEX
   */
  dataTypeList?: string[];
  /**
   * @remarks
   * The dataset name. Supports fuzzy search.
   * 
   * @example
   * test_dataset
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Default: Desc.
   * 
   * Valid values:
   * 
   * *   Asc: Ascending.
   * *   Desc: Descending.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The dataset source. Valid values:
   * 
   * *   DataWorks
   * *   PAI
   * 
   * @example
   * DataWorks
   */
  origin?: string;
  /**
   * @remarks
   * The page number. Default: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default: 10. Maximum: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 251363
   */
  projectId?: number;
  /**
   * @remarks
   * The sort field. Default: CreateTime.
   * 
   * Valid values:
   * 
   * *   ModifyTime: Modification time.
   * *   CreateTime: Creation time.
   * *   Name
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The storage type. Multiple selections are allowed. Supported values:
   * 
   * *   OSS
   * *   NAS: General-purpose NAS file systems
   * *   EXTREMENAS: Extreme NAS file systems
   * *   DLF_LANCE: Data Lake Formation
   * *   CPFS: Cloud Parallel File Storage
   * *   BMCPFS: CPFS for Lingjun
   * *   MAXCOMPUTE: MaxCompute table
   */
  storageTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      dataTypeList: 'DataTypeList',
      name: 'Name',
      order: 'Order',
      origin: 'Origin',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      storageTypeList: 'StorageTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      dataTypeList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      order: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      storageTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataTypeList)) {
      $dara.Model.validateArray(this.dataTypeList);
    }
    if(Array.isArray(this.storageTypeList)) {
      $dara.Model.validateArray(this.storageTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

