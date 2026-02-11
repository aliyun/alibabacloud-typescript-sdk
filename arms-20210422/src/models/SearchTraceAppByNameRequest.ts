// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTraceAppByNameRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  traceAppName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      traceAppName: 'TraceAppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      traceAppName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

