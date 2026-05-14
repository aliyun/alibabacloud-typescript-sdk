// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListCdrIbsRequest extends $dara.Model {
  /**
   * @example
   * 177xxxx7750
   */
  clientNumber?: string;
  /**
   * @example
   * 0032
   */
  cno?: string;
  /**
   * @example
   * xxx
   */
  customerNumber?: string;
  /**
   * @example
   * 1775024775
   */
  endTime?: number;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @example
   * 0
   */
  hiddenType?: number;
  /**
   * @example
   * 14
   */
  limit?: number;
  /**
   * @example
   * uniq_1-162046xxxx.12
   */
  mainUniqueId?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  ownerId?: number;
  /**
   * @example
   * 2233
   */
  qno?: string;
  /**
   * @example
   * 0
   */
  queueAnswerInTime?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 1775024775
   */
  startTime?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      clientNumber: 'ClientNumber',
      cno: 'Cno',
      customerNumber: 'CustomerNumber',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      hiddenType: 'HiddenType',
      limit: 'Limit',
      mainUniqueId: 'MainUniqueId',
      offset: 'Offset',
      ownerId: 'OwnerId',
      qno: 'Qno',
      queueAnswerInTime: 'QueueAnswerInTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientNumber: 'string',
      cno: 'string',
      customerNumber: 'string',
      endTime: 'number',
      enterpriseId: 'number',
      hiddenType: 'number',
      limit: 'number',
      mainUniqueId: 'string',
      offset: 'number',
      ownerId: 'number',
      qno: 'string',
      queueAnswerInTime: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

