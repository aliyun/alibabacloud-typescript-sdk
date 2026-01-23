// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStandardMappingToInvalidRequestUpdateCommand extends $dara.Model {
  belongGuidList?: string[];
  guidList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  standardId?: number;
  static names(): { [key: string]: string } {
    return {
      belongGuidList: 'BelongGuidList',
      guidList: 'GuidList',
      standardId: 'StandardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongGuidList: { 'type': 'array', 'itemType': 'string' },
      guidList: { 'type': 'array', 'itemType': 'string' },
      standardId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.belongGuidList)) {
      $dara.Model.validateArray(this.belongGuidList);
    }
    if(Array.isArray(this.guidList)) {
      $dara.Model.validateArray(this.guidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardMappingToInvalidRequest extends $dara.Model {
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
   */
  updateCommand?: UpdateStandardMappingToInvalidRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateStandardMappingToInvalidRequestUpdateCommand,
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

