// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRecognitionLibsResponseBodyLibs } from "./ListRecognitionLibsResponseBodyLibs";


export class ListRecognitionLibsResponseBody extends $dara.Model {
  libs?: ListRecognitionLibsResponseBodyLibs;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @example
   * 180
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      libs: 'Libs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libs: ListRecognitionLibsResponseBodyLibs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.libs && typeof (this.libs as any).validate === 'function') {
      (this.libs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

