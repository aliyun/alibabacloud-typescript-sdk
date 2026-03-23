// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogRecordsRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  database?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  form?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  queryKeywords?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  SQLId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      form: 'Form',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SQLId: 'SQLId',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      form: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SQLId: 'number',
      startTime: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

