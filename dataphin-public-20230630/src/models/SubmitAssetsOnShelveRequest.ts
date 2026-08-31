// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAssetsOnShelveRequestSubmitCommand extends $dara.Model {
  /**
   * @remarks
   * The list of asset GUIDs to be listed. A maximum of 50 GUIDs can be specified per request.
   * 
   * This parameter is required.
   */
  guidList?: string[];
  static names(): { [key: string]: string } {
    return {
      guidList: 'GuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.guidList)) {
      $dara.Model.validateArray(this.guidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAssetsOnShelveRequest extends $dara.Model {
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
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The submit listing instruction.
   * 
   * This parameter is required.
   */
  submitCommand?: SubmitAssetsOnShelveRequestSubmitCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      submitCommand: 'SubmitCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      submitCommand: SubmitAssetsOnShelveRequestSubmitCommand,
    };
  }

  validate() {
    if(this.submitCommand && typeof (this.submitCommand as any).validate === 'function') {
      (this.submitCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

