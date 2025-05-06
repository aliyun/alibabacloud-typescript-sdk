// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyElasticResourceSpecRequestResourceSpec } from "./ModifyElasticResourceSpecRequestResourceSpec";


export class ModifyElasticResourceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sc_flinkserverless_public_cn-7e22ae5sess
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSpec?: ModifyElasticResourceSpecRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      region: 'string',
      resourceSpec: ModifyElasticResourceSpecRequestResourceSpec,
    };
  }

  validate() {
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

