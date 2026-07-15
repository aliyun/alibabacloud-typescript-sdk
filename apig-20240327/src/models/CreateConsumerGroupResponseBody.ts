// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerGroupResponseBodyData extends $dara.Model {
  /**
   * @example
   * csg-8c13d2b4f8a1
   */
  consumerGroupId?: string;
  /**
   * @example
   * API
   */
  gatewayType?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      gatewayType: 'gatewayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      gatewayType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateConsumerGroupResponseBodyData;
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
      data: CreateConsumerGroupResponseBodyData,
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

