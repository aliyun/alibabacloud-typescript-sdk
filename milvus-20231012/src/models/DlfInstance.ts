// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DlfInstance extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the DLF instance.
   * 
   * @example
   * dlf-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the DLF instance.
   * 
   * @example
   * my-dlf-instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the DLF instance.
   * 
   * @example
   * DLF_2_0
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the region where the DLF instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The current status of the DLF instance.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      instanceType: 'instanceType',
      regionId: 'regionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

