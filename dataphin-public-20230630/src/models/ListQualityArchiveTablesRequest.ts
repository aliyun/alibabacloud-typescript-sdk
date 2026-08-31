// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityArchiveTablesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The ID of the monitored object.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watchId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityArchiveTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The input parameters for querying the anomaly archived table list.
   * 
   * This parameter is required.
   */
  listQuery?: ListQualityArchiveTablesRequestListQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListQualityArchiveTablesRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

