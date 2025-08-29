// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParamsResponseBodyParams extends $dara.Model {
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * home
   */
  name?: string;
  /**
   * @example
   * 4
   */
  paramId?: string;
  /**
   * @example
   * house
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      paramId: 'ParamId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      paramId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParamsResponseBody extends $dara.Model {
  params?: ListParamsResponseBodyParams[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A2D07551-38DA-531E-9B22-877D1D86A579
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': ListParamsResponseBodyParams },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

