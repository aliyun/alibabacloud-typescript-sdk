// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReActivateAuditRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to recreate a project that is used to store audit logs. Valid values:
   * 
   * *   true: recreates a project.
   * *   false: does not recreate a project.
   * 
   * @example
   * true
   */
  enableAudit?: boolean;
  /**
   * @remarks
   * The ID of the Service Mesh (ASM) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c5bf9eb05c4424b89985d6536a809****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      enableAudit: 'EnableAudit',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAudit: 'boolean',
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

