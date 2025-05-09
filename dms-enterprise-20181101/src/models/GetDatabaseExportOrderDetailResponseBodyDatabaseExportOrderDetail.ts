// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfo } from "./GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfo";


export class GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The business background information of the database export ticket.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The user who submitted the ticket.
   * 
   * @example
   * dmsuser
   */
  committer?: string;
  /**
   * @remarks
   * The ID of the user who submitted the ticket. This ID is a user ID and is not the ID of an Alibaba Cloud account.
   * 
   * @example
   * 12***
   */
  committerId?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * 821****
   */
  id?: number;
  /**
   * @remarks
   * The key information about the ticket.
   */
  keyInfo?: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfo;
  /**
   * @remarks
   * The execution logs.
   * 
   * @example
   * 2023-04-12 14:58:32:015 Database Dump Start.
   * 2023-04-12 14:58:32:096 set server side query timeout, sql : set max_execution_time = 0
   */
  log?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test@xxx.xxx.xxx.xxx:3306
   */
  searchName?: string;
  /**
   * @remarks
   * The status description of the ticket.
   * 
   * @example
   * ticket approval
   */
  statusDesc?: string;
  /**
   * @remarks
   * The status description of the workflow.
   * 
   * @example
   * ticket approval
   */
  workflowStatusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      committer: 'Committer',
      committerId: 'CommitterId',
      id: 'Id',
      keyInfo: 'KeyInfo',
      log: 'Log',
      searchName: 'SearchName',
      statusDesc: 'StatusDesc',
      workflowStatusDesc: 'WorkflowStatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      committer: 'string',
      committerId: 'string',
      id: 'number',
      keyInfo: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfo,
      log: 'string',
      searchName: 'string',
      statusDesc: 'string',
      workflowStatusDesc: 'string',
    };
  }

  validate() {
    if(this.keyInfo && typeof (this.keyInfo as any).validate === 'function') {
      (this.keyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

