// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronAppMobi extends $dara.Model {
  /**
   * @example
   * 1
   */
  appId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sda
   */
  artifactUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sda
   */
  commitId?: string;
  /**
   * @example
   * 1
   */
  enterpriseId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1343424
   */
  mobiUserId?: string;
  /**
   * @example
   * sda
   */
  moduleId?: string;
  /**
   * @example
   * sda
   */
  moduleName?: string;
  /**
   * @example
   * sda
   */
  schemaVersion?: string;
  /**
   * @example
   * NEW
   */
  status?: string;
  /**
   * @example
   * sda
   */
  storeUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sdasdaddsad
   */
  token?: string;
  /**
   * @example
   * 1.0.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      artifactUrl: 'artifactUrl',
      commitId: 'commitId',
      enterpriseId: 'enterpriseId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      mobiUserId: 'mobiUserId',
      moduleId: 'moduleId',
      moduleName: 'moduleName',
      schemaVersion: 'schemaVersion',
      status: 'status',
      storeUrl: 'storeUrl',
      token: 'token',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      artifactUrl: 'string',
      commitId: 'string',
      enterpriseId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      mobiUserId: 'string',
      moduleId: 'string',
      moduleName: 'string',
      schemaVersion: 'string',
      status: 'string',
      storeUrl: 'string',
      token: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

