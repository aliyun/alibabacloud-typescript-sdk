// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateSourceServersRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The IDs of migration sources that you want to disassociate from the workgroup. You can specify up to 50 migration sources.
   * 
   * This parameter is required.
   */
  sourceId?: string[];
  /**
   * @remarks
   * The ID of the workgroup.
   * 
   * This parameter is required.
   * 
   * @example
   * w-***
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      workgroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceId)) {
      $dara.Model.validateArray(this.sourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

