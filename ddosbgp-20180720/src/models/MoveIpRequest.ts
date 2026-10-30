// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveIpRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination Anti-DDoS Origin instance.
   * 
   * > You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * @example
   * ddos_originpre_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of IP addresses to migrate to an Anti-DDoS Origin instance for protection. The list is represented as a character string in JSON array format. Each element in the JSON array is a structure that contains the following fields:
   * 
   * - **ip**: String type. Required. The IP address to add.
   * 
   * - **member_uid**: String type. Optional. The member accounts to which the asset belongs. This field is required only when you add an asset under member accounts. Example: [{"ip":"121.41.XX.XX","member_uid":"120100811162****"}]
   * 
   * @example
   * [{"ip":"121.41.XX.XX"},{"ip":"121.42.XX.XX"}]
   */
  ipList?: string;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance.
   * 
   * > You can call the DescribeRegions operation to query all regions supported by Anti-DDoS Origin.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the source Anti-DDoS Origin instance.
   * 
   * > You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * @example
   * ddos_originpre_public_cn-***
   */
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipList: 'string',
      regionId: 'string',
      sourceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

