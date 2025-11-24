// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateControlPlaneLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to collect control plane logs to Simple Log Service.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time to live (TTL) period of the collected logs. Unit: day.
   * 
   * @example
   * 30
   */
  logTTLInDay?: number;
  /**
   * @remarks
   * The name of the Simple Log Service project to which control plane logs are collected.
   * 
   * @example
   * aia-asm-deva-sh
   */
  project?: string;
  /**
   * @remarks
   * The ID of the Service Mesh (ASM) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c20667db760fe4ee6910220136624****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      logTTLInDay: 'LogTTLInDay',
      project: 'Project',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      logTTLInDay: 'number',
      project: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

