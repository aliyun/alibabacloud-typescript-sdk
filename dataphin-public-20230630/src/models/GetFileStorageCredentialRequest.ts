// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileStorageCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 1030131021
   */
  projectId?: number;
  /**
   * @example
   * RESOURCE
   */
  purpose?: string;
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

