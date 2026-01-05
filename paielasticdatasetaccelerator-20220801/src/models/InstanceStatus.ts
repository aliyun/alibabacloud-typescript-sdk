// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceStatus extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Init Succeed
   */
  message?: string;
  /**
   * @example
   * Running
   */
  phase?: string;
  /**
   * @example
   * 10
   */
  slotNum?: number;
  /**
   * @example
   * 20.0G
   */
  usedCapacity?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      phase: 'Phase',
      slotNum: 'SlotNum',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      phase: 'string',
      slotNum: 'number',
      usedCapacity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

