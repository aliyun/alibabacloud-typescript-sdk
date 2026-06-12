// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IngestProcessor } from "./IngestProcessor";


export class ListIngestProcessorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned in the current response.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * A list of ingest processors that meet the query conditions.
   */
  processors?: IngestProcessor[];
  /**
   * @remarks
   * The total number of entries that meet the query conditions.
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

