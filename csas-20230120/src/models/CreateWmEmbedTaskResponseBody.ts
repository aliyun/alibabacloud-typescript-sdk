// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmEmbedTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * job:5GfrJYsoaffmCE7Z5bZtjUefzxfd****
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

export class CreateWmEmbedTaskResponseBody extends $dara.Model {
  data?: CreateWmEmbedTaskResponseBodyData;
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
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
      data: CreateWmEmbedTaskResponseBodyData,
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

