// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Group extends $dara.Model {
  accessToken?: string;
  clusterId?: string;
  createTime?: string;
  internetEndpoint?: string;
  intranetEndpoint?: string;
  name?: string;
  queueService?: string;
  trafficMode?: string;
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

