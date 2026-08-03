// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLifecycleRetrieveJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The page number of the list.
   * 
   * Start value (default value): 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of data retrieval tasks on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the data retrieval task. Valid values:
   * - active: running.
   * - canceled: canceled.
   * - completed: completed.
   * - failed: failed.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The storage class. Valid values:
   * - InfrequentAccess: IA storage class.
   * - Archive: Archive storage class.
   * > If StorageType is not specified, data retrieval tasks of all storage classes are returned.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

