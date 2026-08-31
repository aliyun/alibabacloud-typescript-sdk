// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAssetsOffShelveRequestSubmitCommand extends $dara.Model {
  /**
   * @remarks
   * The list of asset GUIDs to be delisted. A maximum of 50 GUIDs can be specified per request.
   * 
   * This parameter is required.
   */
  guidList?: string[];
  /**
   * @remarks
   * The delisting description. The value must be 1 to 100 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Business adjustment, no longer available externally
   */
  offShelveDescription?: string;
  static names(): { [key: string]: string } {
    return {
      guidList: 'GuidList',
      offShelveDescription: 'OffShelveDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guidList: { 'type': 'array', 'itemType': 'string' },
      offShelveDescription: 'string',
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

export class SubmitAssetsOffShelveRequest extends $dara.Model {
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
   * The delisting submit command.
   * 
   * This parameter is required.
   */
  submitCommand?: SubmitAssetsOffShelveRequestSubmitCommand;
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
      submitCommand: SubmitAssetsOffShelveRequestSubmitCommand,
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

