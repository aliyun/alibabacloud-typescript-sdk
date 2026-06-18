// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAssignSeatsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of target member IDs.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The AccountIds in string format.
   * 
   * @example
   * [\\"5854302538759072\\"]
   */
  accountIdsStr?: string;
  /**
   * @remarks
   * The account ID of the caller that identifies the initiator of this call.
   * 
   * @example
   * acc_123456789
   */
  callerUacAccountId?: string;
  /**
   * @remarks
   * The language setting. Valid values: zh-CN and en-US.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The product namespace ID. For the TokenPlan product, this field is fixed to namespace-1.
   * 
   * @example
   * namespace-1
   */
  namespaceId?: string;
  /**
   * @remarks
   * The seat type. Valid values: standard, pro, and max.
   * 
   * This parameter is required.
   * 
   * @example
   * standard
   */
  seatType?: string;
  /**
   * @remarks
   * The ID of the target workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * ws_123456789
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      accountIdsStr: 'AccountIdsStr',
      callerUacAccountId: 'CallerUacAccountId',
      locale: 'Locale',
      namespaceId: 'NamespaceId',
      seatType: 'SeatType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      accountIdsStr: 'string',
      callerUacAccountId: 'string',
      locale: 'string',
      namespaceId: 'string',
      seatType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

