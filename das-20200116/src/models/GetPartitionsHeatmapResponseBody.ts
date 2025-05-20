// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPartitionsHeatmapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The hot data of the PolarDB-X 2.0 instance. The data is returned in JSON format.
   * 
   * @example
   * {
   *     "boundAxis": [
   *         {
   *             "bound": "A,B,C,D",
   *             "labels": [
   *                 "L1",
   *                 "L2",
   *                 "L3",
   *                 "L4"
   *             ],
   *             "rows": 3171
   *         },
   *         {
   *             "bound": "A,B,C,D",
   *             "labels": [
   *                 "L1",
   *                 "L2",
   *                 "L3",
   *                 "L4"
   *             ],
   *             "rows": 277128
   *         }
   *     ],
   *     "dataMap": {
   *         "READ_WRITTEN_ROWS": [
   *             [
   *                 0,
   *                 0,
   *                 0
   *             ],
   *             [
   *                 0,
   *                 0,
   *                 0
   *             ]
   *         ]
   *     },
   *     "timeAxis": [
   *         1671701056070,
   *         1671701116551,
   *         1671701177020
   *     ]
   * }
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message that contains information such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D00DB161-FEF6-5428-B37A-8D29A4C2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

