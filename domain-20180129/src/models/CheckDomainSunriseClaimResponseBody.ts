// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDomainSunriseClaimResponseBody extends $dara.Model {
  /**
   * @remarks
   * The trademark keyword key provided by the TMDB database.
   * 
   * @example
   * 2017092100/8/2/1/kDfu9htHGEx_y-LJ3XSlKMZ70000020001
   */
  claimKey?: string;
  /**
   * @remarks
   * Unique request access token.
   * 
   * @example
   * BA7A4FD4-EB9A-4A20-BB0C-9AEB15634DC1
   */
  requestId?: string;
  /**
   * @remarks
   * Result. Valid values:
   * - **0**: Not a trademark keyword or not in the claim domain lifecycle.
   * - **1**: In the sunrise domain lifecycle.
   * - **2**: In the claim domain lifecycle.
   * 
   * @example
   * 1
   */
  result?: number;
  static names(): { [key: string]: string } {
    return {
      claimKey: 'ClaimKey',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimKey: 'string',
      requestId: 'string',
      result: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

