// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsJobResponseBodyData extends $dara.Model {
  asyncTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'asyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsJobResponseBody extends $dara.Model {
  data?: CreateMmsJobResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateMmsJobResponseBodyData,
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

