// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The responses code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The monitoring data.
   * 
   * @example
   * [{"Maximum":247,"Mimimum":61,"Average":154,"userId":"127067667954****","taskId":"49f7b317-7645-4cc9-94fd-ea42e522****","timestamp":1551581760000}]
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * ea42e5220930ea42e522****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3febb181-0d98-4af9-8b04-7faf36b048b9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true: The request was successful. false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

