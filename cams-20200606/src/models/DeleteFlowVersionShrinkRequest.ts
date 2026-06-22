// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFlowVersionShrinkRequest extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  bizCode?: string;
  bizExtendShrink?: string;
  /**
   * @example
   * 示例值
   */
  flowCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  flowVersion?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtendShrink: 'BizExtend',
      flowCode: 'FlowCode',
      flowVersion: 'FlowVersion',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtendShrink: 'string',
      flowCode: 'string',
      flowVersion: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

