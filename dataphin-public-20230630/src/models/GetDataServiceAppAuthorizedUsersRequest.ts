// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceAppAuthorizedUsersRequest extends $dara.Model {
  /**
   * @remarks
   * AppId
   * 
   * This parameter is required.
   * 
   * @example
   * 1022
   */
  appId?: number;
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
   * 
   * @example
   * 102102
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

