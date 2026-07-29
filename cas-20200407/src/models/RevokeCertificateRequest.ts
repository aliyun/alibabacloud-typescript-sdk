// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeCertificateRequest extends $dara.Model {
  /**
   * @example
   * 51001
   */
  certificateId?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cas-cn-68n1mm16****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'number',
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

