// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParamsResponseBodyParams extends $dara.Model {
  /**
   * @remarks
   * The environment to which the parameter belongs. Valid values:
   * - Daily: daily environment
   * - Prepub: staging environment
   * - Product: production environment
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The update time. The time follows the ISO 8601 standard and includes the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * home
   */
  name?: string;
  /**
   * @remarks
   * The parameter ID.
   * 
   * @example
   * 4
   */
  paramId?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
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
  /**
   * @remarks
   * The list of parameters.
   */
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
   * @remarks
   * The total number of elements in the list.
   * 
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

