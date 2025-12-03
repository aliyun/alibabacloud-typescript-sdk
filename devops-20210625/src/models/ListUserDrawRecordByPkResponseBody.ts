// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDrawRecordByPkResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1401072305438324
   */
  aliyunPk?: string;
  /**
   * @example
   * dsadsadsadas
   */
  drawGroup?: string;
  /**
   * @example
   * dasdsadasdas
   */
  drawPoolName?: string;
  /**
   * @example
   * 2
   */
  drawResult?: string;
  /**
   * @example
   * 1545726028000
   */
  gmtCreate?: string;
  /**
   * @example
   * null
   */
  taskGroupId?: string;
  /**
   * @example
   * dsadsadasd
   */
  uccId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
      drawGroup: 'drawGroup',
      drawPoolName: 'drawPoolName',
      drawResult: 'drawResult',
      gmtCreate: 'gmtCreate',
      taskGroupId: 'taskGroupId',
      uccId: 'uccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      drawGroup: 'string',
      drawPoolName: 'string',
      drawResult: 'string',
      gmtCreate: 'string',
      taskGroupId: 'string',
      uccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDrawRecordByPkResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListUserDrawRecordByPkResponseBodyData[];
  /**
   * @example
   * None
   */
  message?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListUserDrawRecordByPkResponseBodyData },
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

