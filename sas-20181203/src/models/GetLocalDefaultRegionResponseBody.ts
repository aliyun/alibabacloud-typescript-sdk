// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLocalDefaultRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6D23860-55C2-55AA-B484-****
   */
  requestId?: string;
  /**
   * @remarks
   * The access type of the multi-cloud site. Valid values:
   * 
   * *   **0**: The current site is not the default site of the multi-cloud site. You can specify a site as the default site of the multi-cloud site.
   * *   **1**: The current site is the default site of the multi-cloud site.
   * *   **2**: Another site is set as the default site of the multi-cloud site.
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

