// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaintainableTimeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 08:00-09:00
   */
  maintainableTimePeriod?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maintainableTimePeriod: 'MaintainableTimePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maintainableTimePeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

