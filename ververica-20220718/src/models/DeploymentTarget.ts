// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceQuota } from "./ResourceQuota";


export class DeploymentTarget extends $dara.Model {
  /**
   * @example
   * deployment target
   */
  name?: string;
  /**
   * @example
   * namespace
   */
  namespace?: string;
  quota?: ResourceQuota;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      namespace: 'namespace',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
      quota: ResourceQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

