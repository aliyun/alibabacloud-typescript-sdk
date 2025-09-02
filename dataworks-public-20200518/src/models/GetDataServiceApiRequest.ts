// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceApiRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataService Studio API.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  apiId?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10002
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
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

