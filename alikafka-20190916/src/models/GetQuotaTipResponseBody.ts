// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaTipResponseBodyQuotaData extends $dara.Model {
  /**
   * @remarks
   * Remaining Group quota.
   * 
   * @example
   * 50
   */
  groupLeft?: number;
  /**
   * @remarks
   * Used Group quota.
   * 
   * @example
   * 50
   */
  groupUsed?: number;
  /**
   * @remarks
   * Partition purchase method distinction, with the following values:
   * 
   * - 0: indicates that the instance uses the topic model for purchase.
   * 
   * - 1: indicates partition model purchase.
   * 
   * @example
   * 1
   */
  isPartitionBuy?: number;
  /**
   * @remarks
   * Remaining partition quota.
   * 
   * @example
   * 1050
   */
  partitionLeft?: number;
  /**
   * @remarks
   * Number of purchased partitions.
   * 
   * @example
   * 100
   */
  partitionNumOfBuy?: number;
  /**
   * @remarks
   * Partition quota.
   * 
   * @example
   * 1100
   */
  partitionQuota?: number;
  /**
   * @remarks
   * Used partition quota.
   * 
   * @example
   * 50
   */
  partitionUsed?: number;
  /**
   * @remarks
   * Remaining topic quota.
   * 
   * @example
   * 20
   */
  topicLeft?: number;
  /**
   * @remarks
   * Number of purchased topics.
   * 
   * @example
   * 50
   */
  topicNumOfBuy?: number;
  /**
   * @remarks
   * Topic quota.
   * 
   * @example
   * 50
   */
  topicQuota?: number;
  /**
   * @remarks
   * Used topic quota.
   * 
   * @example
   * 30
   */
  topicUsed?: number;
  static names(): { [key: string]: string } {
    return {
      groupLeft: 'GroupLeft',
      groupUsed: 'GroupUsed',
      isPartitionBuy: 'IsPartitionBuy',
      partitionLeft: 'PartitionLeft',
      partitionNumOfBuy: 'PartitionNumOfBuy',
      partitionQuota: 'PartitionQuota',
      partitionUsed: 'PartitionUsed',
      topicLeft: 'TopicLeft',
      topicNumOfBuy: 'TopicNumOfBuy',
      topicQuota: 'TopicQuota',
      topicUsed: 'TopicUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupLeft: 'number',
      groupUsed: 'number',
      isPartitionBuy: 'number',
      partitionLeft: 'number',
      partitionNumOfBuy: 'number',
      partitionQuota: 'number',
      partitionUsed: 'number',
      topicLeft: 'number',
      topicNumOfBuy: 'number',
      topicQuota: 'number',
      topicUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaTipResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional information. In typical scenarios, it provides a brief description of failed calls to help the caller locate the problem
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Quota information.
   */
  quotaData?: GetQuotaTipResponseBodyQuotaData;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0178A3A7-E87B-5E50-A16F-3E62F534****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      quotaData: 'QuotaData',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      quotaData: GetQuotaTipResponseBodyQuotaData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.quotaData && typeof (this.quotaData as any).validate === 'function') {
      (this.quotaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

