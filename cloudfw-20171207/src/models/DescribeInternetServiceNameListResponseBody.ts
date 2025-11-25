// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetServiceNameListResponseBody extends $dara.Model {
  /**
   * @example
   * 91B01BCD-DFB0-5CA8-9191-5B38C62****
   */
  requestId?: string;
  serviceNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceNameList: 'ServiceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceNameList)) {
      $dara.Model.validateArray(this.serviceNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

