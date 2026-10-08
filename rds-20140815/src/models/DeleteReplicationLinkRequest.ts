// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReplicationLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the disaster recovery instance.
   * 
   * This parameter is required.
   * 
   * @example
   * m-2zecuz9tolf******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to delete the data synchronization link between the primary instance and the disaster recovery instance and promote the disaster recovery instance to a primary instance. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  promoteToMaster?: boolean;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      promoteToMaster: 'PromoteToMaster',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      promoteToMaster: 'boolean',
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

