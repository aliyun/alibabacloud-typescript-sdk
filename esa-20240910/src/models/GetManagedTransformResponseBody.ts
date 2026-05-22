// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedTransformResponseBody extends $dara.Model {
  addClientGeolocationHeader?: string;
  addRealClientIpHeader?: string;
  realClientIpHeaderName?: string;
  requestId?: string;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      addClientGeolocationHeader: 'AddClientGeolocationHeader',
      addRealClientIpHeader: 'AddRealClientIpHeader',
      realClientIpHeaderName: 'RealClientIpHeaderName',
      requestId: 'RequestId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addClientGeolocationHeader: 'string',
      addRealClientIpHeader: 'string',
      realClientIpHeaderName: 'string',
      requestId: 'string',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

