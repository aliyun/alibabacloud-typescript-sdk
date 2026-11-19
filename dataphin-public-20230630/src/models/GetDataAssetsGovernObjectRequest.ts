// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAssetsGovernObjectRequestCommand extends $dara.Model {
  /**
   * @remarks
   * The governance object ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 22004
   */
  governObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      governObjectId: 'GovernObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      governObjectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAssetsGovernObjectRequest extends $dara.Model {
  /**
   * @remarks
   * The query command.
   * 
   * This parameter is required.
   */
  command?: GetDataAssetsGovernObjectRequestCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The operator user ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: GetDataAssetsGovernObjectRequestCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.command && typeof (this.command as any).validate === 'function') {
      (this.command as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

