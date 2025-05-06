// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KerberosConf extends $dara.Model {
  creator?: string;
  enabled?: boolean;
  gmtCreated?: string;
  gmtModified?: string;
  kerberosConfId?: string;
  keytabs?: string[];
  krb5Conf?: string;
  name?: string;
  networkServiceId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      enabled: 'enabled',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      kerberosConfId: 'kerberosConfId',
      keytabs: 'keytabs',
      krb5Conf: 'krb5Conf',
      name: 'name',
      networkServiceId: 'networkServiceId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      enabled: 'boolean',
      gmtCreated: 'string',
      gmtModified: 'string',
      kerberosConfId: 'string',
      keytabs: { 'type': 'array', 'itemType': 'string' },
      krb5Conf: 'string',
      name: 'string',
      networkServiceId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keytabs)) {
      $dara.Model.validateArray(this.keytabs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

