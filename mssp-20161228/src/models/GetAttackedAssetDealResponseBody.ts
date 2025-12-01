// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackedAssetDealResponseBodyDataEcsTrendList extends $dara.Model {
  /**
   * @remarks
   * Date point.
   * 
   * @example
   * 202312或20231205
   */
  date?: string;
  /**
   * @remarks
   * Number of processed items.
   * 
   * @example
   * 2
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered items.
   * 
   * @example
   * 暂时无值，有疑问请联系管理员
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackedAssetDealResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Collection of attacked asset convergence trends.
   */
  ecsTrendList?: GetAttackedAssetDealResponseBodyDataEcsTrendList[];
  static names(): { [key: string]: string } {
    return {
      ecsTrendList: 'EcsTrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsTrendList: { 'type': 'array', 'itemType': GetAttackedAssetDealResponseBodyDataEcsTrendList },
    };
  }

  validate() {
    if(Array.isArray(this.ecsTrendList)) {
      $dara.Model.validateArray(this.ecsTrendList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackedAssetDealResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetAttackedAssetDealResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1E74F11C-B4A8-5774-962C-02003BA8504E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the query was successful.<br />
   * **Enum values:**
   * * true: Success.
   * * false: Failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAttackedAssetDealResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

