// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultipleTraceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  traceIDs?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      traceIDs: 'TraceIDs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      traceIDs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.traceIDs)) {
      $dara.Model.validateArray(this.traceIDs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

