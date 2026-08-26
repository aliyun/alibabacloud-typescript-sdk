// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableTrustedOriginRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IDaaS EIAM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_example
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the trusted origin.
   * 
   * This parameter is required.
   * 
   * @example
   * to_example
   */
  trustedOriginId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      trustedOriginId: 'TrustedOriginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      trustedOriginId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

