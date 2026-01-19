// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCorpNumberGroupResponseBodyData extends $dara.Model {
  aliyunUid?: string;
  description?: string;
  numberCount?: string;
  numberGroupId?: string;
  numberGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      description: 'Description',
      numberCount: 'NumberCount',
      numberGroupId: 'NumberGroupId',
      numberGroupName: 'NumberGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      description: 'string',
      numberCount: 'string',
      numberGroupId: 'string',
      numberGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpNumberGroupResponseBody extends $dara.Model {
  code?: string;
  data?: CreateCorpNumberGroupResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateCorpNumberGroupResponseBodyData,
      httpStatusCode: 'number',
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

