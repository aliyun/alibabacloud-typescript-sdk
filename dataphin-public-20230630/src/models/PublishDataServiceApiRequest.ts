// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishDataServiceApiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102102
   */
  apiId?: number;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      opTenantId: 'number',
      projectId: 'number',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

