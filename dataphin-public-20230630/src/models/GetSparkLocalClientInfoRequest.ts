// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkLocalClientInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  envEnum?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      envEnum: 'EnvEnum',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envEnum: 'string',
      opTenantId: 'number',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

