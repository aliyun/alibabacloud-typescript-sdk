// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticBizQpsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mode?: string;
  opsElasticQps?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
      opsElasticQps: 'OpsElasticQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
      opsElasticQps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

