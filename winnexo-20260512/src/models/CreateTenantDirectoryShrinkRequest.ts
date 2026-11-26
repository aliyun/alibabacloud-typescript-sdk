// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantDirectoryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application credential. Pass this parameter when you use the application proxy mode, and specify the operator by using opsUserId or opsUserCode based on the application configuration. Do not use real credentials in logs or public examples.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * Specifies whether to generate AI version summaries for subsequent content updates. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * If this parameter is omitted or set to null, the configuration is not changed. Disabling this feature does not delete existing summaries. This parameter is supported only for standard enterprise knowledge base root directories.
   */
  changeRecordEnabled?: boolean;
  /**
   * @remarks
   * The purpose or content description of the directory. If this parameter is omitted, the value is empty.
   * 
   * @example
   * Team product materials and operation guides
   */
  description?: string;
  /**
   * @remarks
   * The name of the directory. The name must be 1 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Product knowledge base
   */
  name?: string;
  /**
   * @remarks
   * The digital employee association mode. ALL indicates that the directory is visible to all digital employees, and operatingObjectNames must be omitted, set to null, or set to an empty array. SPECIFIED indicates association by list, and operatingObjectNames must be explicitly provided. An empty array indicates that no employees are associated. If this parameter is omitted or set to null, the association configuration is not changed. This parameter is supported only for standard enterprise knowledge base root directories.
   * 
   * @example
   * SPECIFIED
   */
  ooVisibilityMode?: string;
  /**
   * @remarks
   * The list of internal names of the specified associated digital employees. This parameter must be used together with ooVisibilityMode. This parameter is required when ooVisibilityMode is set to SPECIFIED. An empty array indicates that all associations are cleared. When ooVisibilityMode is set to ALL, this parameter must be omitted, set to null, or set to an empty array. You can specify up to 100 items. Each item must be 1 to 256 characters in length after leading and trailing spaces are removed. The server verifies that the employees exist and are available in the current tenant, and fully replaces the associations after deduplication.
   */
  operatingObjectNamesShrink?: string;
  /**
   * @remarks
   * The unique code of the proxied user in the tenant. This parameter is used only when the identity mapping mode of the application credential is source_uid. You cannot use this parameter to bypass tenant or knowledge base permission verification.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The ID of the proxied WINNEXO platform user. This parameter is used only when the identity mapping mode of the application credential is winnexo_uid. You cannot use this parameter to bypass tenant or knowledge base permission verification.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The internal primary key of the parent directory. If this parameter is omitted or set to null, an enterprise knowledge base root directory is created. If this parameter is specified, a subdirectory is created. This parameter must be omitted or set to null when digital employee association or version summary configurations are included.
   * 
   * @example
   * 1001
   */
  parentId?: number;
  /**
   * @remarks
   * The path of the directory. If this parameter is omitted or set to null, the server calculates the path based on the parent directory and the name.
   * 
   * @example
   * /Product knowledge base
   */
  path?: string;
  /**
   * @remarks
   * The ID of the target tenant. This parameter is used for tenant routing in public requests. The server authentication chain verifies access permissions based on this parameter. You cannot use this parameter to access unauthorized tenants.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      changeRecordEnabled: 'changeRecordEnabled',
      description: 'description',
      name: 'name',
      ooVisibilityMode: 'ooVisibilityMode',
      operatingObjectNamesShrink: 'operatingObjectNames',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      parentId: 'parentId',
      path: 'path',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      changeRecordEnabled: 'boolean',
      description: 'string',
      name: 'string',
      ooVisibilityMode: 'string',
      operatingObjectNamesShrink: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      parentId: 'number',
      path: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

