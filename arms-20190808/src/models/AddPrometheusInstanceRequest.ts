// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrometheusInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Prometheus instance for Remote Write.
   * 
   * This parameter is required.
   * 
   * @example
   * notificationpolicy_test
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the Prometheus instance. Only Prometheus instances for Remote Write is supported. Set the value to RW.
   * 
   * This parameter is required.
   * 
   * @example
   * RW
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
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

