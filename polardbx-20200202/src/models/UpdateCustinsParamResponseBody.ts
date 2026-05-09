// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustinsParamResponseBodyData extends $dara.Model {
  /**
   * @example
   * ******
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustinsParamResponseBody extends $dara.Model {
  data?: UpdateCustinsParamResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 73559800-3c8c-****-bd40-99cfcff3fe1e
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateCustinsParamResponseBodyData,
      requestId: 'string',
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

