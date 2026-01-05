// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrincipalsResponseBodyPrincipals extends $dara.Model {
  /**
   * @remarks
   * The ID of the RAM entity.
   * 
   * @example
   * 24477111603637****
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the RAM entity. Valid values:
   * 
   * *   RamUser: a RAM user
   * *   RamRole: a RAM role
   * 
   * @example
   * RamUser
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListPrincipalsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The RAM entities.
   */
  principals?: ListPrincipalsResponseBodyPrincipals[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      principals: 'Principals',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principals: { 'type': 'array', 'itemType': ListPrincipalsResponseBodyPrincipals },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.principals)) {
      $dara.Model.validateArray(this.principals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

