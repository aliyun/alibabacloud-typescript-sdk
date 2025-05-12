// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RebuildDesktopsResponseBodyRebuildResults } from "./RebuildDesktopsResponseBodyRebuildResults";


export class RebuildDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The recreation results.
   */
  rebuildResults?: RebuildDesktopsResponseBodyRebuildResults[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rebuildResults: 'RebuildResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rebuildResults: { 'type': 'array', 'itemType': RebuildDesktopsResponseBodyRebuildResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rebuildResults)) {
      $dara.Model.validateArray(this.rebuildResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

