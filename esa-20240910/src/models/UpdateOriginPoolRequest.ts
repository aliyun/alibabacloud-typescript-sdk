// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginPoolRequestOriginsAuthConf extends $dara.Model {
  accessKey?: string;
  authType?: string;
  region?: string;
  secretKey?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      authType: 'AuthType',
      region: 'Region',
      secretKey: 'SecretKey',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      authType: 'string',
      region: 'string',
      secretKey: 'string',
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

export class UpdateOriginPoolRequestOrigins extends $dara.Model {
  address?: string;
  authConf?: UpdateOriginPoolRequestOriginsAuthConf;
  enabled?: boolean;
  header?: any;
  ipVersionPolicy?: string;
  name?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      authConf: 'AuthConf',
      enabled: 'Enabled',
      header: 'Header',
      ipVersionPolicy: 'IpVersionPolicy',
      name: 'Name',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      authConf: UpdateOriginPoolRequestOriginsAuthConf,
      enabled: 'boolean',
      header: 'any',
      ipVersionPolicy: 'string',
      name: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.authConf && typeof (this.authConf as any).validate === 'function') {
      (this.authConf as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOriginPoolRequest extends $dara.Model {
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  origins?: UpdateOriginPoolRequestOrigins[];
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      id: 'Id',
      origins: 'Origins',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
      origins: { 'type': 'array', 'itemType': UpdateOriginPoolRequestOrigins },
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.origins)) {
      $dara.Model.validateArray(this.origins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

