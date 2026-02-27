// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRowPermissionByTableGuidsResponseBodyData extends $dara.Model {
  /**
   * @example
   * Restrict query region
   */
  rowPermissionDesc?: string;
  /**
   * @example
   * 300000001
   */
  rowPermissionId?: string;
  /**
   * @example
   * Region
   */
  rowPermissionName?: string;
  static names(): { [key: string]: string } {
    return {
      rowPermissionDesc: 'RowPermissionDesc',
      rowPermissionId: 'RowPermissionId',
      rowPermissionName: 'RowPermissionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowPermissionDesc: 'string',
      rowPermissionId: 'string',
      rowPermissionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRowPermissionByTableGuidsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetRowPermissionByTableGuidsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': GetRowPermissionByTableGuidsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

