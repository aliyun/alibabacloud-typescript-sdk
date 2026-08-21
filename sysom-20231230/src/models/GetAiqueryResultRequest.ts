// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIQueryResultRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The AI analysis ID.
   * 
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      analysisId: 'analysisId',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      analysisId: 'string',
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

