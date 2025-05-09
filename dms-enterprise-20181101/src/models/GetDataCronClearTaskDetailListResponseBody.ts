// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataCronClearTaskDetailListResponseBodyDataCronClearTaskDetailList } from "./GetDataCronClearTaskDetailListResponseBodyDataCronClearTaskDetailList";


export class GetDataCronClearTaskDetailListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The historical data cleansing tasks
   */
  dataCronClearTaskDetailList?: GetDataCronClearTaskDetailListResponseBodyDataCronClearTaskDetailList[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C1D39814-9808-47F8-AFE0-AF167239AC9B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of SQL tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataCronClearTaskDetailList: 'DataCronClearTaskDetailList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCronClearTaskDetailList: { 'type': 'array', 'itemType': GetDataCronClearTaskDetailListResponseBodyDataCronClearTaskDetailList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataCronClearTaskDetailList)) {
      $dara.Model.validateArray(this.dataCronClearTaskDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

