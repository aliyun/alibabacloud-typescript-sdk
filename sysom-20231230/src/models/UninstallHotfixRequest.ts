// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallHotfixRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1example
   */
  instanceId?: string;
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
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallHotfixRequest extends $dara.Model {
  /**
   * @remarks
   * CVE ID
   * 
   * This parameter is required.
   * 
   * @example
   * CVE-2026-12345
   */
  cveId?: string;
  /**
   * @remarks
   * The target instances.
   * 
   * This parameter is required.
   */
  instances?: UninstallHotfixRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      cveId: 'cveId',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      instances: { 'type': 'array', 'itemType': UninstallHotfixRequestInstances },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

