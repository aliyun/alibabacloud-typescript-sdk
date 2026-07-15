// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddConsumerGroupConsumersResponseBodyData extends $dara.Model {
  failedConsumerIds?: string[];
  skippedConsumerIds?: string[];
  successConsumerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      failedConsumerIds: 'failedConsumerIds',
      skippedConsumerIds: 'skippedConsumerIds',
      successConsumerIds: 'successConsumerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedConsumerIds: { 'type': 'array', 'itemType': 'string' },
      skippedConsumerIds: { 'type': 'array', 'itemType': 'string' },
      successConsumerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedConsumerIds)) {
      $dara.Model.validateArray(this.failedConsumerIds);
    }
    if(Array.isArray(this.skippedConsumerIds)) {
      $dara.Model.validateArray(this.skippedConsumerIds);
    }
    if(Array.isArray(this.successConsumerIds)) {
      $dara.Model.validateArray(this.successConsumerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddConsumerGroupConsumersResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: BatchAddConsumerGroupConsumersResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchAddConsumerGroupConsumersResponseBodyData,
      message: 'string',
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

