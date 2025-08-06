// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICaptionExtractionJobsResponseBodyAICaptionExtractionJobList extends $dara.Model {
  AICaptionExtractionResult?: string;
  code?: string;
  creationTime?: string;
  jobId?: string;
  message?: string;
  status?: string;
  templateConfig?: string;
  userData?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      AICaptionExtractionResult: 'AICaptionExtractionResult',
      code: 'Code',
      creationTime: 'CreationTime',
      jobId: 'JobId',
      message: 'Message',
      status: 'Status',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AICaptionExtractionResult: 'string',
      code: 'string',
      creationTime: 'string',
      jobId: 'string',
      message: 'string',
      status: 'string',
      templateConfig: 'string',
      userData: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICaptionExtractionJobsResponseBody extends $dara.Model {
  AICaptionExtractionJobList?: GetAICaptionExtractionJobsResponseBodyAICaptionExtractionJobList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AICaptionExtractionJobList: 'AICaptionExtractionJobList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AICaptionExtractionJobList: { 'type': 'array', 'itemType': GetAICaptionExtractionJobsResponseBodyAICaptionExtractionJobList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AICaptionExtractionJobList)) {
      $dara.Model.validateArray(this.AICaptionExtractionJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

