// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSurveyJobsRequest extends $dara.Model {
  channelList?: string[];
  cloudTypeList?: string[];
  name?: string;
  pageNum?: number;
  pageSize?: number;
  region?: string[];
  surveyRange?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      channelList: 'channelList',
      cloudTypeList: 'cloudTypeList',
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      region: 'region',
      surveyRange: 'surveyRange',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelList: { 'type': 'array', 'itemType': 'string' },
      cloudTypeList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      region: { 'type': 'array', 'itemType': 'string' },
      surveyRange: 'string',
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
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

