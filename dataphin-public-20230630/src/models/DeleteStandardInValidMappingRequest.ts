// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStandardInValidMappingRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * The list of parent GUIDs. A maximum of 1000 GUIDs are supported.
   */
  belongGuidList?: string[];
  /**
   * @remarks
   * The list of GUIDs. A maximum of 1000 GUIDs are supported.
   */
  guidList?: string[];
  /**
   * @remarks
   * The standard ID.
   * 
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

export class DeleteStandardInValidMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The delete instruction.
   * 
   * This parameter is required.
   */
  deleteCommand?: DeleteStandardInValidMappingRequestDeleteCommand;
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
  static names(): { [key: string]: string } {
    return {
      deleteCommand: 'DeleteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommand: DeleteStandardInValidMappingRequestDeleteCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.deleteCommand && typeof (this.deleteCommand as any).validate === 'function') {
      (this.deleteCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

