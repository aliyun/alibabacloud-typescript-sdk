// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectionRequestResourceMeta extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ld-uf69****9nqjjes
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

