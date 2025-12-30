// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultimodalSearchTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 模型相关信息
   * 
   * 
   * {
   *   "Data": {
   *     "PageSize": 1,
   *     "PageNumber": 1,
   *     "Total": 12,
   *     "Items": [
   *       {
   *         "Status": "Running",
   *         "ProcessBatch": 0,
   *         "TotalBatch": 0,
   *         "EndTime": "",
   *         "CreateTime": "2025-12-25T20:38:35",
   *         "Id": "dd84065b-eb46-4c7b-abb0-0d633ec811d7",
   *         "SuccessBatch": 0,
   *         "Query" : "油漆桶",
   *         "DatasetIds": ["ds-1", "ds-2"]
   *       }
   *     ]
   *   },
   *   "RequestId": "849E84DB-*****-9D734",
   *   "Success": true
   * }
   */
  data?: any;
  /**
   * @example
   * 错误码
   */
  errCode?: string;
  /**
   * @example
   * 错误信息
   */
  errMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 983863E2-****-1D15-A4AE-3468CD75383D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

