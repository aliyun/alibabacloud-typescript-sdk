// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePushAppHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  tenantProxyUid?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      tenantProxyUid: 'tenant-proxy-uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tenantProxyUid: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

