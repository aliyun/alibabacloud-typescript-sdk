// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveStandbyInstanceRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  forced?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ob608fgj1q****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ob4bv8o7sp****
   */
  targetInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      forced: 'Forced',
      instanceId: 'InstanceId',
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forced: 'boolean',
      instanceId: 'string',
      targetInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

