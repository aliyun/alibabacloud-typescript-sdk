// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarningStrategyConfigResponseBodyDataData extends $dara.Model {
  id?: number;
  intervalTime?: number;
  lambda?: string;
  level?: number;
  maxNumber?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      intervalTime: 'IntervalTime',
      lambda: 'Lambda',
      level: 'Level',
      maxNumber: 'MaxNumber',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      intervalTime: 'number',
      lambda: 'string',
      level: 'number',
      maxNumber: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningStrategyConfigResponseBodyData extends $dara.Model {
  data?: ListWarningStrategyConfigResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWarningStrategyConfigResponseBodyDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningStrategyConfigResponseBody extends $dara.Model {
  code?: string;
  count?: number;
  data?: ListWarningStrategyConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListWarningStrategyConfigResponseBodyData,
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

