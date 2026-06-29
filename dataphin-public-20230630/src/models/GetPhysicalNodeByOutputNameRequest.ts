// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalNodeByOutputNameRequest extends $dara.Model {
  /**
   * @remarks
   * Environment identifier
   * - DEV: Development environment
   * - PROD (default): Production environment
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Node output name
   * 
   * This parameter is required.
   * 
   * @example
   * t_test
   */
  outputName?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      outputName: 'OutputName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      outputName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

