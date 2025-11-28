// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllPrivacyAlgorithmResponseBodyData extends $dara.Model {
  algImplList?: string[];
  algType?: string;
  static names(): { [key: string]: string } {
    return {
      algImplList: 'AlgImplList',
      algType: 'AlgType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algImplList: { 'type': 'array', 'itemType': 'string' },
      algType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.algImplList)) {
      $dara.Model.validateArray(this.algImplList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllPrivacyAlgorithmResponseBody extends $dara.Model {
  code?: string;
  data?: ListAllPrivacyAlgorithmResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAllPrivacyAlgorithmResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

