// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventQuaraFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the file list to view.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The identifier of the request source. Set the value to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * @example
   * 10541428
   * 
   * @deprecated
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the server group where the quarantined file is located.
   * 
   * @example
   * 11472451
   */
  groupingId?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The unique identifier of the quarantined file.
   * 
   * @example
   * a31337789f64d39b2219733ec99f9af7
   */
  quaraTag?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 59.82.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The status of the quarantined files to query. Valid values:  
   * - **quaraFailed**: Quarantine failed.
   * - **quaraDone**: Quarantine succeeded.
   * - **quaraing**: Quarantine in progress.
   * - **rollbackFailed**: Quarantine rollback failed.
   * - **rollbackDone**: Quarantine rollback succeeded.
   * - **rollbacking**: Quarantine rollback in progress.
   * 
   * @example
   * quaraDone
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      from: 'From',
      groupId: 'GroupId',
      groupingId: 'GroupingId',
      pageSize: 'PageSize',
      quaraTag: 'QuaraTag',
      sourceIp: 'SourceIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      from: 'string',
      groupId: 'string',
      groupingId: 'number',
      pageSize: 'string',
      quaraTag: 'string',
      sourceIp: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

