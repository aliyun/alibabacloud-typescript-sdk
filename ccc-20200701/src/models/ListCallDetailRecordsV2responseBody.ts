// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCallDetailRecordsV2ResponseBodyData } from "./ListCallDetailRecordsV2responseBodyData";


export class ListCallDetailRecordsV2ResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListCallDetailRecordsV2ResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 01B12EE4-6AF2-4730-8B78-EC15F4E5C025
   */
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
      data: ListCallDetailRecordsV2ResponseBodyData,
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

