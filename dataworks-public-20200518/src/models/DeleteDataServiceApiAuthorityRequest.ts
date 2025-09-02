// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataServiceApiAuthorityRequest extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  apiId?: number;
  /**
   * @remarks
   * The ID of the workspace from which you want to revoke the access permissions on the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  authorizedProjectId?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10003
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID. This parameter is deprecated.
   * 
   * @example
   * 10004
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      authorizedProjectId: 'AuthorizedProjectId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      authorizedProjectId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

