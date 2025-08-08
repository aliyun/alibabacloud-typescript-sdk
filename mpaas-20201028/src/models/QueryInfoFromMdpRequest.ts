// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInfoFromMdpRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @example
   * 13178195662
   */
  mobile?: string;
  /**
   * @example
   * 2fe6e5fa754be73d1721b9bd2c6cf821
   */
  mobileMd5?: string;
  /**
   * @example
   * db0797452ccafce84d7c151eb81596099bda3f097693d1e18b588804e6742ced
   */
  mobileSha256?: string;
  mobileSm3?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  riskScene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
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

