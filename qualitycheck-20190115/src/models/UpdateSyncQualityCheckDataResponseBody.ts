// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSyncQualityCheckDataResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123123D8C-5BD9-42A7-B527-1235F8**
   */
  taskId?: string;
  /**
   * @example
   * 20210101-1212121***
   */
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      tid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: UpdateSyncQualityCheckDataResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5F8***
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
      code: 'string',
      data: UpdateSyncQualityCheckDataResponseBodyData,
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

