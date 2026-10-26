// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabasesProjectResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * 53
   */
  assetId?: string;
  /**
   * @remarks
   * The error code. An error code of **200** indicates that the operation is successful. Other error codes indicate that the operation failed.
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

export class ModifyDatabasesProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The results of the operation.
   */
  results?: ModifyDatabasesProjectResponseBodyResults[];
  /**
   * @remarks
   * The number of successful operations.
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
   * 15
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
      results: { 'type': 'array', 'itemType': ModifyDatabasesProjectResponseBodyResults },
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

