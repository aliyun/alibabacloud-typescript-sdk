// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated and is replaced by the Id parameter.
   * 
   * @example
   * 11668
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 11668
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1234
   */
  instanceId?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      id: 'number',
      instanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

