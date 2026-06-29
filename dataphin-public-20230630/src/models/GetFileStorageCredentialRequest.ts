// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileStorageCredentialRequest extends $dara.Model {
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
   * @remarks
   * The project ID. This parameter is required when the temporary authorization is used to create resource files.
   * 
   * @example
   * 1030131021
   */
  projectId?: number;
  /**
   * @remarks
   * The purpose of the authorization. Valid values:
   * 
   * - RESOURCE: creates resource files.
   * - COMPUTE_SOURCE_SETTING: stores compute source configurations.
   * - NONE: no specific purpose.
   * 
   * Default value: NONE.
   * 
   * @example
   * RESOURCE
   */
  purpose?: string;
  /**
   * @remarks
   * Specifies whether to use an internal endpoint. Default value: false.
   */
  useVpcEndpoint?: boolean;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      purpose: 'Purpose',
      useVpcEndpoint: 'UseVpcEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      projectId: 'number',
      purpose: 'string',
      useVpcEndpoint: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

