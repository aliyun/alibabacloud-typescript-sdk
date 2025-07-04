// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAdvanceConfigDirResponseBodyResult } from "./ListAdvanceConfigDirResponseBodyResult";


export class ListAdvanceConfigDirResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The advanced configuration files.
   */
  result?: ListAdvanceConfigDirResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAdvanceConfigDirResponseBodyResult },
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

