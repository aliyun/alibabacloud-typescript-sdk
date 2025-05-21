// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGatewaySecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to cascade delete the security group rules.
   * 
   * @example
   * true
   */
  cascadingDelete?: boolean;
  static names(): { [key: string]: string } {
    return {
      cascadingDelete: 'cascadingDelete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadingDelete: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

