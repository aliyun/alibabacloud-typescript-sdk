// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPairDrillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The drill ID.
   * 
   * @example
   * drill-xxx
   */
  drillId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

