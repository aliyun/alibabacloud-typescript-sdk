// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBizChainStatInfoResponseBodyData extends $dara.Model {
  bizChainName?: string;
  usedCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizChainName: 'BizChainName',
      usedCount: 'UsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainName: 'string',
      usedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizChainStatInfoResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeBizChainStatInfoResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeBizChainStatInfoResponseBodyData },
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

