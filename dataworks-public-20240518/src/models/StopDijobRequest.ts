// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 11668
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The ID of the sync task.
   * 
   * @example
   * 11668
   */
  id?: number;
  /**
   * @remarks
   * The ID of the instance.
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

