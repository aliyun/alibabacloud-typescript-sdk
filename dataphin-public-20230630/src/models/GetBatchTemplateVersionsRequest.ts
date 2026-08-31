// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTemplateVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * - DEV: development environment.
   * - PROD: production environment.
   * 
   * Default value for dev_prod projects: DEV.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      projectId: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

