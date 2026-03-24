// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Group extends $dara.Model {
  /**
   * @remarks
   * The token that is used to access the service group.
   * 
   * @example
   * MzJiMDI5MDliODc0MTlkYmI0ZDhlYmExYjczYTIyZTE3Zm********
   */
  accessToken?: string;
  /**
   * @remarks
   * The region where the service group resides.
   * 
   * @example
   * cn-shanghai
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the service group was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The public endpoint of the service group.
   * 
   * @example
   * http://1110*****.cn-hangzhou.pai-eas.aliyuncs.com/api/predict/test_group
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint of the service group.
   * 
   * @example
   * http://1110*****.vpc.cn-hangzhou.pai-eas.aliyuncs.com/api/predict/test_group
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The name of the service group.
   * 
   * @example
   * foo
   */
  name?: string;
  /**
   * @remarks
   * The queue service that is included in the service group.
   * 
   * @example
   * qservice
   */
  queueService?: string;
  /**
   * @remarks
   * The traffic mode.
   * 
   * Valid values:
   * 
   * *   auto: The traffic is automatically allocated based on the number of instances.
   * *   customized: The traffic is allocated based on the custom weight.
   * 
   * @example
   * auto
   */
  trafficMode?: string;
  /**
   * @remarks
   * The time when the service group was updated. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-29T11:13:20Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      name: 'Name',
      queueService: 'QueueService',
      trafficMode: 'TrafficMode',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      clusterId: 'string',
      createTime: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      name: 'string',
      queueService: 'string',
      trafficMode: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

