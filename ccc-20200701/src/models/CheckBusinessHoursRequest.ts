// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBusinessHoursRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1789526665860
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

