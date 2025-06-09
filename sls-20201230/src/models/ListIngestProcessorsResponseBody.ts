// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IngestProcessor } from "./IngestProcessor";


export class ListIngestProcessorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The ingest processors that are returned.
   */
  processors?: IngestProcessor[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      processors: 'processors',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      processors: { 'type': 'array', 'itemType': IngestProcessor },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.processors)) {
      $dara.Model.validateArray(this.processors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

