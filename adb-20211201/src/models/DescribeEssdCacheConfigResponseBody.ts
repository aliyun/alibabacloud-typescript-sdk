// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEssdCacheConfigResponseBodyData } from "./DescribeEssdCacheConfigResponseBodyData";


export class DescribeEssdCacheConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeEssdCacheConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7EDB8E4-9769-4233-88C7-DCA4C9******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeEssdCacheConfigResponseBodyData,
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

