// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostsProjectResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The host ID.
   * 
   * @example
   * 16
   */
  assetId?: string;
  /**
   * @remarks
   * The error code. A value of **200** indicates that the operation was successful. Other values indicate that the operation failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result message.
   * 
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'AssetId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostsProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 81500666-d7f5-4143-8329-0223cc738105
   */
  requestId?: string;
  /**
   * @remarks
   * The call results of the operation.
   */
  results?: ModifyHostsProjectResponseBodyResults[];
  /**
   * @remarks
   * The number of hosts that were successfully moved.
   * 
   * @example
   * 10
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ModifyHostsProjectResponseBodyResults },
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

