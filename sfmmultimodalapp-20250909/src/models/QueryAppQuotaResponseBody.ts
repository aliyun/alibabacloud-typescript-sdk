// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAppQuotaResponseBody extends $dara.Model {
  activeLicenseCount?: number;
  appId?: string;
  licenseCount?: number;
  requestId?: string;
  usagePercent?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      activeLicenseCount: 'ActiveLicenseCount',
      appId: 'AppId',
      licenseCount: 'LicenseCount',
      requestId: 'RequestId',
      usagePercent: 'UsagePercent',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeLicenseCount: 'number',
      appId: 'string',
      licenseCount: 'number',
      requestId: 'string',
      usagePercent: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

