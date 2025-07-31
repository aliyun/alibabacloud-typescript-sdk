// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectRequest extends $dara.Model {
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12356
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      id: 'Id',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      id: 'number',
      opTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

