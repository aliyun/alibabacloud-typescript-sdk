// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeRoleWithOIDCResponseBodyAssumedRoleUser extends $dara.Model {
  /**
   * @remarks
   * The ARN of the temporary identity that you use to assume the RAM role.
   * 
   * @example
   * acs:ram::113511544585****:role/testoidc/TestOidcAssumedRoleSession
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the temporary identity that you use to assume the RAM role.
   * 
   * @example
   * 33157794895460****
   */
  assumedRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumedRoleId: 'AssumedRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumedRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

