// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when an error occurs during the call. A normal result does not necessarily include this field. Do not use the return of a specific success code as a prerequisite for obtaining the quota.
   * 
   * @example
   * InvalidProductType.ValueNotSupported
   */
  code?: string;
  /**
   * @remarks
   * The maximum resource count quota applicable to the current query conditions. This is not the usage or remaining quota.
   * 
   * - `ResourceType=AppInstanceGroup`: Unit: groups.
   * - `ResourceType=AppAuthUser`: Unit: users.
   * - `ResourceType=PoolNodeAmount`: Unit: nodes.
   * 
   * If no smaller limit is obtained, `2147483647` is returned. This does not mean that the resource inventory is unlimited.
   * 
   * @example
   * 30
   */
  data?: number;
  /**
   * @remarks
   * The error message returned when an error occurs during the call. This message and the error code help you locate the cause of the error.
   * 
   * @example
   * The ProductType is not supported.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

