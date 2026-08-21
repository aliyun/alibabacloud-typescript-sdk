// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAnomalyDiagnosisRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The UUID of the anomaly event.
   * 
   * @example
   * 8047d763-5465-4a8c-b1cd-23f5a8ba2594
   */
  uuid?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      uuid: 'uuid',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      uuid: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

