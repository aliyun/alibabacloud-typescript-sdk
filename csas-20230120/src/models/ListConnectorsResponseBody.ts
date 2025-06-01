// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConnectorsResponseBodyConnectors } from "./ListConnectorsResponseBodyConnectors";


export class ListConnectorsResponseBody extends $dara.Model {
  connectors?: ListConnectorsResponseBodyConnectors[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      connectors: 'Connectors',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectors: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectors },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.connectors)) {
      $dara.Model.validateArray(this.connectors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

