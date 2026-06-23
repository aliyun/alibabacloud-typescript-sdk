// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedSceneItem extends $dara.Model {
  /**
   * @remarks
   * The result in JSON structure.
   * 
   * @example
   * {\\"title\\": \\"伦敦时间\\", \\"targetTimeZone\\": \\"Europe/London\\", \\"targetTimeMillisecond\\": \\"1745820817178\\", \\"targetTime\\": \\"2025-04-28 14:13:37\\", \\"beijingTimeZone\\": \\"PRC\\", \\"beijingTimeMillisecond\\": \\"1745846017178\\"}
   */
  detail?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * time
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

