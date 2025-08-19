// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSpecReviewTasksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * 339
   */
  id?: string;
  /**
   * @example
   * test
   */
  appName?: string;
  applyReason?: string;
  /**
   * @example
   * 2024-05-27T10:13:22.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * USER
   */
  source?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
   * @example
   * QUOTA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appName: 'appName',
      applyReason: 'applyReason',
      gmtCreate: 'gmtCreate',
      source: 'source',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      appName: 'string',
      applyReason: 'string',
      gmtCreate: 'string',
      source: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpecReviewTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 55F7B3FE-05D8-5F0F-BD55-A18967D447DC
   */
  requestId?: string;
  result?: ListSpecReviewTasksResponseBodyResult[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSpecReviewTasksResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

