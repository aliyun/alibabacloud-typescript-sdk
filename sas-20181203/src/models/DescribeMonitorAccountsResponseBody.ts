// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorAccountsResponseBodyAccountIdInfos extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 119593010538****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when it was added to the control list, in timestamp format with second precision.
   * 
   * @example
   * 1760520684000
   */
  addTime?: number;
  /**
   * @remarks
   * The account ID of the operator.
   * 
   * @example
   * 106635707417****
   */
  operatorUid?: string;
  /**
   * @remarks
   * Basic service switch. Values: 
   * - **0**: Off 
   * - **1**: On
   * 
   * @example
   * 1
   */
  postBasicService?: number;
  /**
   * @remarks
   * The purchased version of Cloud Security Center. Values:
   * - **0** or **1**: Free Edition 
   * - **2** or **3**: Enterprise Edition
   *  - **5**: Advanced Edition 
   * - **6**: Anti-Virus Edition 
   * - **7**: Flagship Edition
   * 
   * @example
   * 7
   */
  sasVersion?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      addTime: 'AddTime',
      operatorUid: 'OperatorUid',
      postBasicService: 'PostBasicService',
      sasVersion: 'SasVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      addTime: 'number',
      operatorUid: 'string',
      postBasicService: 'number',
      sasVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of member account information.
   */
  accountIdInfos?: DescribeMonitorAccountsResponseBodyAccountIdInfos[];
  /**
   * @remarks
   * The IDs of the members.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 028CF634-5268-5660-9575-48C9ED6BF880
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIdInfos: 'AccountIdInfos',
      accountIds: 'AccountIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdInfos: { 'type': 'array', 'itemType': DescribeMonitorAccountsResponseBodyAccountIdInfos },
      accountIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIdInfos)) {
      $dara.Model.validateArray(this.accountIdInfos);
    }
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

