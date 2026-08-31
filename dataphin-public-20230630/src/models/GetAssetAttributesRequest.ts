// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetAttributesRequestQueryCommand extends $dara.Model {
  /**
   * @remarks
   * The list of property codes to return. If this parameter is not specified, all custom properties of the asset are returned.
   */
  attributeCodeList?: string[];
  /**
   * @remarks
   * The list of asset GUIDs. A maximum of 50 GUIDs are supported.
   * 
   * This parameter is required.
   */
  guidList?: string[];
  static names(): { [key: string]: string } {
    return {
      attributeCodeList: 'AttributeCodeList',
      guidList: 'GuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeCodeList: { 'type': 'array', 'itemType': 'string' },
      guidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.attributeCodeList)) {
      $dara.Model.validateArray(this.attributeCodeList);
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

export class GetAssetAttributesRequest extends $dara.Model {
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
   * The query instruction.
   * 
   * This parameter is required.
   */
  queryCommand?: GetAssetAttributesRequestQueryCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      queryCommand: 'QueryCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      queryCommand: GetAssetAttributesRequestQueryCommand,
    };
  }

  validate() {
    if(this.queryCommand && typeof (this.queryCommand as any).validate === 'function') {
      (this.queryCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

