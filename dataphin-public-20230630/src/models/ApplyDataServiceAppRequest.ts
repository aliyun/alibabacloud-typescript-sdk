// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyDataServiceAppRequestApplyCommand extends $dara.Model {
  /**
   * @remarks
   * appId
   * 
   * This parameter is required.
   * 
   * @example
   * 2011
   */
  appId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06-30
   */
  expireDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      expireDate: 'ExpireDate',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      expireDate: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyDataServiceAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applyCommand?: ApplyDataServiceAppRequestApplyCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102102
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      applyCommand: 'ApplyCommand',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyCommand: ApplyDataServiceAppRequestApplyCommand,
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    if(this.applyCommand && typeof (this.applyCommand as any).validate === 'function') {
      (this.applyCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

