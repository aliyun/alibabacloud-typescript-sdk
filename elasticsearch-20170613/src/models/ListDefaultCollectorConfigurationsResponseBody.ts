// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDefaultCollectorConfigurationsResponseBodyResult } from "./ListDefaultCollectorConfigurationsResponseBodyResult";


export class ListDefaultCollectorConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8BAE3C32-8E4A-47D6-B4B0-95B5DE643BF5
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListDefaultCollectorConfigurationsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDefaultCollectorConfigurationsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

