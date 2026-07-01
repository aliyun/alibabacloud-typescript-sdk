// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsOcrOssInfoRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The OCR task type. Valid values:
   * - ICP_DOMAIN: ICP filing screenshot for domain-type links.
   * 
   * @example
   * ICP_DOMAIN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

