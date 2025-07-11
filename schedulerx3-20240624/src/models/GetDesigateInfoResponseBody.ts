// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDesigateInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  designateType?: number;
  /**
   * @example
   * true
   */
  transferable?: boolean;
  static names(): { [key: string]: string } {
    return {
      designateType: 'DesignateType',
      transferable: 'Transferable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      designateType: 'number',
      transferable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesigateInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: GetDesigateInfoResponseBodyData;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 1DF6732E-15D8-5E1F-95E3-C10077F556B5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetDesigateInfoResponseBodyData,
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

