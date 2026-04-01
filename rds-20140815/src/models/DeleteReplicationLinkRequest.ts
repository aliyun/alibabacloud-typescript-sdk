// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReplicationLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DR instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp1trqb4p1xd****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to delete the data synchronization link between the DR instance and the primary instance and promote the DR instance to the primary instance. Valid values:
   * 
   * *   **true**
   * *   **false**
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

