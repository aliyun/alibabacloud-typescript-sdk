// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecommendByCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {
   *       "SupportOnlineResizeDisk": true,
   *       "DBInstanceName": "rm-bp****",
   *       "maxSupportDiskSizeGB": 6144
   * }
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90496720-2319-42A8-87CD-FCE4DF95EBED
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
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

