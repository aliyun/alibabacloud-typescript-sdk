// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataServiceApiAuthorityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  apiId?: number;
  /**
   * @remarks
   * The ID of the workspace to which the access permissions on the API are granted.
   * 
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  authorizedProjectId?: number;
  /**
   * @remarks
   * The end time of the validity period of the access permissions. The time must be a UNIX timestamp. Unit: seconds. Example: 1600531564, which indicates 2020-09-20 00:06:04 (UTC+8).
   * 
   * This parameter is required.
   * 
   * @example
   * 1600531564
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10003
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1004
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      authorizedProjectId: 'AuthorizedProjectId',
      endTime: 'EndTime',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      authorizedProjectId: 'number',
      endTime: 'number',
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

