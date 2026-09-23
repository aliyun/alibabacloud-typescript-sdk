// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayInstanceSpecRequestHaResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs for zone-disaster recovery resources.
   * 
   * @example
   * 10
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size of zone-disaster recovery resources, in GB. The value must be 4 times the number of CPUs.
   * 
   * @example
   * 40
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecRequestResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size.
   * > The memory size must be 4 times the number of CPUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable zone-disaster recovery resources for the workspace.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The resource specifications for zone-disaster recovery.
   * 
   * **if can be null:**
   * true
   */
  haResourceSpec?: ModifyPrepayInstanceSpecRequestHaResourceSpec;
  /**
   * @remarks
   * The list of vSwitch IDs in the secondary zone for zone-disaster recovery.
   * 
   * **if can be null:**
   * true
   */
  haVSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the secondary zone for zone-disaster recovery.
   * 
   * **if can be null:**
   * true
   */
  haZoneId?: string;
  /**
   * @remarks
   * The order instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * The region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The resource specification information.
   * 
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

