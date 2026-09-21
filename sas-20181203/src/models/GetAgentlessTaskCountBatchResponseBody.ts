// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataValue } from "./DataValue";


export class GetAgentlessTaskCountBatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics grouped by resource UUID. The key of the map is the resource UUID.
   * 
   * @example
   * {"3bb30859-b3b5-4f28-868f-b0892c98****":{"RiskMachine":1,"ScanMachine":1}}
   */
  data?: { [key: string]: DataValue };
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * D03DD0FD-6041-5107-AC00-383E28F1****
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': DataValue },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

