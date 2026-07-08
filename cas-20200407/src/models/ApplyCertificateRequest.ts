// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. Before you request a certificate, call the UpdateInstance operation to update and complete the application information for the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cas_dv-cn-rp643r82d0i1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

