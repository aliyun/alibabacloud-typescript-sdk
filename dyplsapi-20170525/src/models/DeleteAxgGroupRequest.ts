// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAxgGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The G group ID (GID).
   * 
   * - Log on to the Phone Number Privacy Protection console. On the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool) page, filter for number pools of the **AXG Privacy Number** type and click **G Number Group Management** to view the IDs of all G groups.
   * 
   * - If you created the G group by calling the [CreateAxgGroup](https://help.aliyun.com/document_detail/110250.html) API, use the returned **GroupID** as the value for this **GroupId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 200001234****
   */
  groupId?: number;
  ownerId?: number;
  /**
   * @remarks
   * The key of the number pool.
   * 
   * You can obtain the **key of the number pool** on the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool) page in the Phone Number Privacy Protection console.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2235****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      ownerId: 'number',
      poolKey: 'string',
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

