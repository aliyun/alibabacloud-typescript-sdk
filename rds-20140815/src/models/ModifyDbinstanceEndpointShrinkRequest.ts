// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceEndpointShrinkRequest extends $dara.Model {
  clientToken?: string;
  DBInstanceEndpointDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceEndpointId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * **if can be null:**
   * true
   */
  nodeItemsShrink?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceEndpointDescription: 'DBInstanceEndpointDescription',
      DBInstanceEndpointId: 'DBInstanceEndpointId',
      DBInstanceId: 'DBInstanceId',
      nodeItemsShrink: 'NodeItems',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceEndpointDescription: 'string',
      DBInstanceEndpointId: 'string',
      DBInstanceId: 'string',
      nodeItemsShrink: 'string',
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

