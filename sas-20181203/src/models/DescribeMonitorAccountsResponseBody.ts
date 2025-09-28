// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorAccountsResponseBodyAccountIdInfos extends $dara.Model {
  accountId?: string;
  addTime?: number;
  isCloudSiemAccount?: string;
  isSasAccount?: string;
  operatorUid?: string;
  postBasicService?: number;
  sasVersion?: string;
  aliUid?: string;
  isMarked?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      addTime: 'AddTime',
      isCloudSiemAccount: 'IsCloudSiemAccount',
      isSasAccount: 'IsSasAccount',
      operatorUid: 'OperatorUid',
      postBasicService: 'PostBasicService',
      sasVersion: 'SasVersion',
      aliUid: 'aliUid',
      isMarked: 'isMarked',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      addTime: 'number',
      isCloudSiemAccount: 'string',
      isSasAccount: 'string',
      operatorUid: 'string',
      postBasicService: 'number',
      sasVersion: 'string',
      aliUid: 'string',
      isMarked: 'string',
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

