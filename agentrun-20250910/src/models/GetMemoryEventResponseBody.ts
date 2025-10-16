// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryEventResponseBodyData extends $dara.Model {
  event?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      event: 'event',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.event) {
      $dara.Model.validateMap(this.event);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryEventResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: GetMemoryEventResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BF2A63E4-FCE9-5A65-A60E-4086C8EDBC06
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMemoryEventResponseBodyData,
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

