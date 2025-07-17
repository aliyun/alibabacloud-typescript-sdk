// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigListLogicTableRouteConfig extends $dara.Model {
  /**
   * @remarks
   * The routing algorithm expression.
   * 
   * @example
   * #id#%16\\t
   */
  routeExpr?: string;
  /**
   * @remarks
   * The unique key of the routing algorithm.
   * 
   * @example
   * 1
   */
  routeKey?: string;
  /**
   * @remarks
   * The ID of the logical table.
   * 
   * @example
   * 4****
   */
  tableId?: number;
  static names(): { [key: string]: string } {
    return {
      routeExpr: 'RouteExpr',
      routeKey: 'RouteKey',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeExpr: 'string',
      routeKey: 'string',
      tableId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigList extends $dara.Model {
  logicTableRouteConfig?: ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigListLogicTableRouteConfig[];
  static names(): { [key: string]: string } {
    return {
      logicTableRouteConfig: 'LogicTableRouteConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicTableRouteConfig: { 'type': 'array', 'itemType': ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigListLogicTableRouteConfig },
    };
  }

  validate() {
    if(Array.isArray(this.logicTableRouteConfig)) {
      $dara.Model.validateArray(this.logicTableRouteConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTableRouteConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * MissingTableId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * TableId is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The routing algorithms.
   */
  logicTableRouteConfigList?: ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C6A0D7D-B034-59F6-854C-32425AC6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicTableRouteConfigList: 'LogicTableRouteConfigList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicTableRouteConfigList: ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.logicTableRouteConfigList && typeof (this.logicTableRouteConfigList as any).validate === 'function') {
      (this.logicTableRouteConfigList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

