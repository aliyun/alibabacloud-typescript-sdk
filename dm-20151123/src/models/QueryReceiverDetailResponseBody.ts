// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryReceiverDetailResponseBodyData } from "./QueryReceiverDetailResponseBodyData";


export class QueryReceiverDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Field name for the Data of recipients
   * 
   * @example
   * UserName,NickName,Gender,Birthday,Mobile
   */
  dataSchema?: string;
  /**
   * @remarks
   * Used for pagination. If there are more results, set this returned value to the NextStart in the next request.
   * 
   * @example
   * 90f0243616#40test@example.com
   */
  nextStart?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * Total count (deprecated field, kept for historical compatibility)
   * 
   * @example
   * 361
   */
  totalCount?: number;
  /**
   * @remarks
   * Detailed information
   */
  data?: QueryReceiverDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      dataSchema: 'DataSchema',
      nextStart: 'NextStart',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSchema: 'string',
      nextStart: 'string',
      requestId: 'string',
      totalCount: 'number',
      data: QueryReceiverDetailResponseBodyData,
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

