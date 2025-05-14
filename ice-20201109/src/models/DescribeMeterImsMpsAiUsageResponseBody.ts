// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMeterImsMpsAiUsageResponseBodyData } from "./DescribeMeterImsMpsAiUsageResponseBodyData";


export class DescribeMeterImsMpsAiUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The usage statistics of IMS on AI processing of MPS.
   */
  data?: DescribeMeterImsMpsAiUsageResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0622C702-41BE-467E-AF2E-883D4517962E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImsMpsAiUsageResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

