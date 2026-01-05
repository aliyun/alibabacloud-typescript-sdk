// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociatePrincipalFromPortfolioRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the product portfolio.
   * 
   * This parameter is required.
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The ID of the RAM entity.
   * 
   * For more information about how to obtain the ID of a RAM user, see [GetUser](https://help.aliyun.com/document_detail/28681.html).
   * 
   * For more information about how to obtain the ID of a RAM role, see [GetRole](https://help.aliyun.com/document_detail/28711.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 24477111603637****
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the Resource Access Management (RAM) entity. Valid values:
   * 
   * *   RamUser: a RAM user
   * *   RamRole: a RAM role
   * 
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

