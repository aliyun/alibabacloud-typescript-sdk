// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInfoFromMdpRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  mobile?: string;
  mobileMd5?: string;
  mobileSha256?: string;
  mobileSm3?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  riskScene?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mobile: 'Mobile',
      mobileMd5: 'MobileMd5',
      mobileSha256: 'MobileSha256',
      mobileSm3: 'MobileSm3',
      riskScene: 'RiskScene',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mobile: 'string',
      mobileMd5: 'string',
      mobileSha256: 'string',
      mobileSm3: 'string',
      riskScene: 'string',
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

