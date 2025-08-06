// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIServiceResponseBodyAIList extends $dara.Model {
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIServiceResponseBody extends $dara.Model {
  AIList?: GetAIServiceResponseBodyAIList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIList: 'AIList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIList: { 'type': 'array', 'itemType': GetAIServiceResponseBodyAIList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AIList)) {
      $dara.Model.validateArray(this.AIList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

