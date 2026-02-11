// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      traceID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

