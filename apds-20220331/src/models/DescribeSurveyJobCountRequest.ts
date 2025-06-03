// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSurveyJobCountRequest extends $dara.Model {
  channelList?: string[];
  cloudTypeList?: string[];
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      channelList: 'channelList',
      cloudTypeList: 'cloudTypeList',
      name: 'name',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelList: { 'type': 'array', 'itemType': 'string' },
      cloudTypeList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelList)) {
      $dara.Model.validateArray(this.channelList);
    }
    if(Array.isArray(this.cloudTypeList)) {
      $dara.Model.validateArray(this.cloudTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

