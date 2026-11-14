// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the call fails. A normal result is not guaranteed to contain this field. You should not use the return of a specific success code as a prerequisite for obtaining the quota.
   * 
   * @example
   * InvalidProductType.ValueNotSupported
   */
  code?: string;
  /**
   * @remarks
   * The maximum resource count quota applicable under the current query conditions. It is not the usage or remaining quota.
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
   * The error message returned when the call fails. It is used together with the error code to help locate the cause.
   * 
   * @example
   * The ProductType is not supported.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot request issues.
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

