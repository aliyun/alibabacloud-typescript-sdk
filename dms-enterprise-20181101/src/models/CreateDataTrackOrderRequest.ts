// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataTrackOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabases](https://help.aliyun.com/document_detail/141876.html) operation to query the ID of the database.
   * 
   * > You can call this operation to create a data tracking ticket for only physical databases. This operation is not applicable to logical databases.
   * 
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  dbId?: string;
  /**
   * @remarks
   * The end time of the time range in which you want to track data operations. The time must be in the yyyy-MM-dd HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-23 10:00:00
   */
  jobEndTime?: string;
  /**
   * @remarks
   * The start time of the time range in which you want to track data operations. The time must be in the yyyy-MM-dd HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-23 00:00:00
   */
  jobStartTime?: string;
  /**
   * @remarks
   * The names of the tables for which you want to track data operations.
   * 
   * This parameter is required.
   */
  tableNames?: string[];
  /**
   * @remarks
   * The types of data operations that you want to track.
   * 
   * This parameter is required.
   */
  trackTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      jobEndTime: 'JobEndTime',
      jobStartTime: 'JobStartTime',
      tableNames: 'TableNames',
      trackTypes: 'TrackTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      jobEndTime: 'string',
      jobStartTime: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
      trackTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    if(Array.isArray(this.trackTypes)) {
      $dara.Model.validateArray(this.trackTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataTrackOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The purpose or objective of the data tracking ticket. This parameter is used to help reduce unnecessary communication.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The parameters of the ticket.
   * 
   * This parameter is required.
   */
  param?: CreateDataTrackOrderRequestParam;
  /**
   * @remarks
   * The IDs of the operators that are related to the ticket.
   */
  relatedUserList?: string[];
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      param: CreateDataTrackOrderRequestParam,
      relatedUserList: { 'type': 'array', 'itemType': 'string' },
      tid: 'number',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    if(Array.isArray(this.relatedUserList)) {
      $dara.Model.validateArray(this.relatedUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

