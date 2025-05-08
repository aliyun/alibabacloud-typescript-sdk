// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexRequestDataSource extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  credentialId?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  credentialKey?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  database?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  endpoint?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  isPrivateLink?: boolean;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  region?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  subPath?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  subType?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  table?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'CredentialId',
      credentialKey: 'CredentialKey',
      database: 'Database',
      endpoint: 'Endpoint',
      isPrivateLink: 'IsPrivateLink',
      region: 'Region',
      subPath: 'SubPath',
      subType: 'SubType',
      table: 'Table',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      credentialKey: 'string',
      database: 'string',
      endpoint: 'string',
      isPrivateLink: 'boolean',
      region: 'string',
      subPath: 'string',
      subType: 'string',
      table: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

