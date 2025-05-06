// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMaskingRulesResponseBodyData } from "./DescribeMaskingRulesResponseBodyData";


export class DescribeMaskingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-bp1s826a1up******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The result data that is returned.
   */
  data?: DescribeMaskingRulesResponseBodyData;
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * > If the request is successful, Successful is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F83D131-1C18-4599-889D-729A9D******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid value:
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
      DBClusterId: 'DBClusterId',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      data: DescribeMaskingRulesResponseBodyData,
      message: 'string',
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

