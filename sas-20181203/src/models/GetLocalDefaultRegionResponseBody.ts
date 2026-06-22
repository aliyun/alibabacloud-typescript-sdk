// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLocalDefaultRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generates for the request.
   * 
   * @example
   * F6D23860-55C2-55AA-B484-****
   */
  requestId?: string;
  /**
   * @remarks
   * The access type of the multi-cloud site. Valid values:
   * - **0**: No default site exists. You can select one.
   * - **1**: The current site is already the default site.
   * - **2**: Another site is already set as the default site.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

