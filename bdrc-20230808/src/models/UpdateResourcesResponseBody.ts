// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique identity of the asynchronous task.
   * 
   * @example
   * t-bp1ewftyzmeg3bl4dtd2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateResourcesResponseBodyData;
  /**
   * @remarks
   * The unique identity of the request.
   * 
   * @example
   * 5B2F09BF-CEBD-5A7E-AC01-E7F86169A5E5
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
      data: UpdateResourcesResponseBodyData,
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

