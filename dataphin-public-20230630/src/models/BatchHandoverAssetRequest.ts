// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchHandoverAssetRequestHandoverCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  guidList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 300004567
   */
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      guidList: 'GuidList',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guidList: { 'type': 'array', 'itemType': 'string' },
      targetUserId: 'string',
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

export class BatchHandoverAssetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  handoverCommand?: BatchHandoverAssetRequestHandoverCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      handoverCommand: 'HandoverCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handoverCommand: BatchHandoverAssetRequestHandoverCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.handoverCommand && typeof (this.handoverCommand as any).validate === 'function') {
      (this.handoverCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

