// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventQuaraFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The ID of the request source. Set the value to **sas**.
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
   * The ID of the server group to which the server belongs. The quarantined file is located on the server.
   * 
   * @example
   * 11472451
   */
  groupingId?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The unique ID of the quarantined file.
   * 
   * @example
   * a31337789f64d39b2219733ec99f9af7
   */
  quaraTag?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 59.82.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The status of the quarantined file that you want to query. Valid values:
   * 
   * *   **quaraFailed**: The file fails to be quarantined.
   * *   **quaraDone**: The file is quarantined.
   * *   **quaraing**: The file is being quarantined.
   * *   **rollbackFailed**: The system fails to cancel quarantining the file.
   * *   **rollbackDone**: The system cancelled quarantining the file.
   * *   **rollbacking**: The system is cancelling quarantining the file.
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

