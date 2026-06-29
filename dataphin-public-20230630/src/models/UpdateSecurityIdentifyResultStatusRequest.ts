// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityIdentifyResultStatusRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the result is effective.
   * 
   * This parameter is required.
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of identification result IDs.
   * 
   * This parameter is required.
   */
  identifyResultIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      identifyResultIdList: 'IdentifyResultIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      identifyResultIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.identifyResultIdList)) {
      $dara.Model.validateArray(this.identifyResultIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityIdentifyResultStatusRequest extends $dara.Model {
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
   * The update instruction.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateSecurityIdentifyResultStatusRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateSecurityIdentifyResultStatusRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

