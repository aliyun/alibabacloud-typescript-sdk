// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTpsByTimeResponseBodyData extends $dara.Model {
  endTime?: string;
  maxTps?: number;
  startTime?: number;
  tpsList?: number[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxTps: 'MaxTps',
      startTime: 'StartTime',
      tpsList: 'tpsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxTps: 'number',
      startTime: 'number',
      tpsList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.tpsList)) {
      $dara.Model.validateArray(this.tpsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTpsByTimeResponseBody extends $dara.Model {
  code?: number;
  data?: GetTpsByTimeResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: GetTpsByTimeResponseBodyData,
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

