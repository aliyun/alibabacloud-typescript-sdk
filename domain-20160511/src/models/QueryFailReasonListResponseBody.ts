// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFailReasonListResponseBodyDataFailRecord extends $dara.Model {
  date?: string;
  failReason?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      failReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonListResponseBodyData extends $dara.Model {
  failRecord?: QueryFailReasonListResponseBodyDataFailRecord[];
  static names(): { [key: string]: string } {
    return {
      failRecord: 'FailRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failRecord: { 'type': 'array', 'itemType': QueryFailReasonListResponseBodyDataFailRecord },
    };
  }

  validate() {
    if(Array.isArray(this.failRecord)) {
      $dara.Model.validateArray(this.failRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonListResponseBody extends $dara.Model {
  data?: QueryFailReasonListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryFailReasonListResponseBodyData,
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

