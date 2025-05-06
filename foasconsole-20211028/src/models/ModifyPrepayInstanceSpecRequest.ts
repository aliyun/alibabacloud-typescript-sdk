// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyPrepayInstanceSpecRequestHaResourceSpec } from "./ModifyPrepayInstanceSpecRequestHaResourceSpec";
import { ModifyPrepayInstanceSpecRequestResourceSpec } from "./ModifyPrepayInstanceSpecRequestResourceSpec";


export class ModifyPrepayInstanceSpecRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  ha?: boolean;
  /**
   * **if can be null:**
   * true
   */
  haResourceSpec?: ModifyPrepayInstanceSpecRequestHaResourceSpec;
  /**
   * **if can be null:**
   * true
   */
  haVSwitchIds?: string[];
  /**
   * **if can be null:**
   * true
   */
  haZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
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
  resourceSpec?: ModifyPrepayInstanceSpecRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      haVSwitchIds: 'HaVSwitchIds',
      haZoneId: 'HaZoneId',
      instanceId: 'InstanceId',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      haResourceSpec: ModifyPrepayInstanceSpecRequestHaResourceSpec,
      haVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      haZoneId: 'string',
      instanceId: 'string',
      region: 'string',
      resourceSpec: ModifyPrepayInstanceSpecRequestResourceSpec,
    };
  }

  validate() {
    if(this.haResourceSpec && typeof (this.haResourceSpec as any).validate === 'function') {
      (this.haResourceSpec as any).validate();
    }
    if(Array.isArray(this.haVSwitchIds)) {
      $dara.Model.validateArray(this.haVSwitchIds);
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

