// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociatePrincipalWithPortfolioRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24477111603637****
   */
  principalId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RamUser
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
      principalId: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

