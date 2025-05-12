// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFotaTasksResponseBodyFotaTasks } from "./DescribeFotaTasksResponseBodyFotaTasks";


export class DescribeFotaTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message. If the request was successful, a `success` is returned. If the request failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Details about the image update task.
   */
  fotaTasks?: DescribeFotaTasksResponseBodyFotaTasks[];
  /**
   * @remarks
   * The returned error message. This parameter is not returned if the Code value is a `success` message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fotaTasks: 'FotaTasks',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fotaTasks: { 'type': 'array', 'itemType': DescribeFotaTasksResponseBodyFotaTasks },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fotaTasks)) {
      $dara.Model.validateArray(this.fotaTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

