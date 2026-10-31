// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStandardValidMappingRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * The list of parent GUIDs. The maximum number of GUIDs is 1,000.
   */
  belongGuidList?: string[];
  /**
   * @remarks
   * The list of GUIDs. The maximum number of GUIDs is 1,000.
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

export class DeleteStandardValidMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The delete command.
   * 
   * This parameter is required.
   */
  deleteCommand?: DeleteStandardValidMappingRequestDeleteCommand;
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
      deleteCommand: 'DeleteCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommand: DeleteStandardValidMappingRequestDeleteCommand,
      opTenantId: 'number',
      opUserId: 'string',
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

