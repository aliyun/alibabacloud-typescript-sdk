// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodyDataDeliveryChannelInfo extends $dara.Model {
  /**
   * @remarks
   * The number of partitions of the destination topic.
   * 
   * @example
   * 3
   */
  partitionNum?: number;
  /**
   * @remarks
   * The public endpoint of the data shipping channel.
   * 
   * @example
   * dts-****.aliyuncs.com:18***
   */
  publicDproxyUrl?: string;
  /**
   * @remarks
   * The region in which the data shipping channel resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The destination topic of the data shipping instance.
   * 
   * @example
   * cn_hangzhou_******_data_delivery_version2
   */
  topic?: string;
  /**
   * @remarks
   * The VPC endpoint of the data shipping channel.
   * 
   * @example
   * dts-****.aliyuncs.com:18***
   */
  vpcDproxyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      partitionNum: 'PartitionNum',
      publicDproxyUrl: 'PublicDproxyUrl',
      region: 'Region',
      topic: 'Topic',
      vpcDproxyUrl: 'VpcDproxyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitionNum: 'number',
      publicDproxyUrl: 'string',
      region: 'string',
      topic: 'string',
      vpcDproxyUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

