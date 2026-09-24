// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeEsRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8E5A2C41-D96B-4308-AF72-5C0B14E6****
   */
  requestId?: string;
  /**
   * @remarks
   * The response content returned as-is from ES. The structure is determined by the ES API being called.
   * 
   * @example
   * {"esResult":{"took":5,"timed_out":false,"hits":{"total":{"value":1,"relation":"eq"},"max_score":1.0,"hits":[{"_index":"my-index","_id":"1","_score":1.0,"_source":{"title":"Wireless Bluetooth Headphones"}}]}}}
   */
  result?: any;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

