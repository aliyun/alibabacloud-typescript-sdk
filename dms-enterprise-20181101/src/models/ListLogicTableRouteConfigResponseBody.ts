// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigList } from "./ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigList";


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

