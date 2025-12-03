// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkitemTimeTypeListResponseBodyTimeType extends $dara.Model {
  description?: string;
  /**
   * @example
   * deploy
   */
  displayName?: string;
  /**
   * @example
   * 67fb001005aac8d3d2a3372416
   */
  identifier?: string;
  name?: string;
  /**
   * @example
   * 1
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      identifier: 'identifier',
      name: 'name',
      position: 'position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      identifier: 'string',
      name: 'string',
      position: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkitemTimeTypeListResponseBody extends $dara.Model {
  /**
   * @example
   * Invalid.IdNotFound
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * HC93CE1A-8D7A-13A9-8306-7465DE2E5C0F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  timeType?: GetWorkitemTimeTypeListResponseBodyTimeType[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
      timeType: 'timeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'string',
      timeType: { 'type': 'array', 'itemType': GetWorkitemTimeTypeListResponseBodyTimeType },
    };
  }

  validate() {
    if(Array.isArray(this.timeType)) {
      $dara.Model.validateArray(this.timeType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

