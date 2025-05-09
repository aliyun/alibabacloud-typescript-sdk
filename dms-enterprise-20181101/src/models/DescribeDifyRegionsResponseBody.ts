// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDifyRegionsResponseBodyData } from "./DescribeDifyRegionsResponseBodyData";


export class DescribeDifyRegionsResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeDifyRegionsResponseBodyData[];
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeDifyRegionsResponseBodyData },
      errorCode: 'string',
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

