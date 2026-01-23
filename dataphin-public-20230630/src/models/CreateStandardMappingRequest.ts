// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStandardMappingRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assetGuidList?: string[];
  /**
   * @example
   * SET_INVALID_TO_VALID
   */
  invalidMappingRelationOperationType?: string;
  /**
   * @example
   * VALID
   */
  relationType?: string;
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
      assetGuidList: 'AssetGuidList',
      invalidMappingRelationOperationType: 'InvalidMappingRelationOperationType',
      relationType: 'RelationType',
      standardId: 'StandardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGuidList: { 'type': 'array', 'itemType': 'string' },
      invalidMappingRelationOperationType: 'string',
      relationType: 'string',
      standardId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetGuidList)) {
      $dara.Model.validateArray(this.assetGuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardMappingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateStandardMappingRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateStandardMappingRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

