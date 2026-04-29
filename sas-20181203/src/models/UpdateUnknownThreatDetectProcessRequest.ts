// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUnknownThreatDetectProcessRequest extends $dara.Model {
  /**
   * @example
   * 2026011210040602108912721603151374234
   */
  processId?: string;
  /**
   * @example
   * remark
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      processId: 'ProcessId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

