// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaTipResponseBodyQuotaData extends $dara.Model {
  /**
   * @remarks
   * The number of available groups.
   * 
   * @example
   * 50
   */
  groupLeft?: number;
  /**
   * @remarks
   * The number of used groups.
   * 
   * @example
   * 50
   */
  groupUsed?: number;
  /**
   * @remarks
   * The method that you use to purchase partitions. Valid values:
   * 
   * *   0: indicates that the instance is purchased based on topics.
   * *   1: indicates that the instance is purchased based on partitions.
   * 
   * @example
   * 1
   */
  isPartitionBuy?: number;
  /**
   * @remarks
   * The number of available partitions.
   * 
   * @example
   * 1050
   */
  partitionLeft?: number;
  /**
   * @remarks
   * The number of purchased partitions.
   * 
   * @example
   * 100
   */
  partitionNumOfBuy?: number;
  /**
   * @remarks
   * The quota of partitions.
   * 
   * @example
   * 1100
   */
  partitionQuota?: number;
  /**
   * @remarks
   * The number of used partitions.
   * 
   * @example
   * 50
   */
  partitionUsed?: number;
  /**
   * @remarks
   * The number of available topics.
   * 
   * @example
   * 20
   */
  topicLeft?: number;
  /**
   * @remarks
   * The number of purchased topics.
   * 
   * @example
   * 50
   */
  topicNumOfBuy?: number;
  /**
   * @remarks
   * The quota of topics.
   * 
   * @example
   * 50
   */
  topicQuota?: number;
  /**
   * @remarks
   * The number of used topics.
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

