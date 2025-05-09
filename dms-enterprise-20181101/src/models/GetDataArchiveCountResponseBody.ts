// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataArchiveCountResponseBodyData } from "./GetDataArchiveCountResponseBodyData";


export class GetDataArchiveCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDataArchiveCountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B63CAC5-BD7F-5C7C-82C9-59DFFBC3C5C2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataArchiveCountResponseBodyData,
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

