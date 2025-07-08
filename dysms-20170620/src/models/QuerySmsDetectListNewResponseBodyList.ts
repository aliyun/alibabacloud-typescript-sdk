// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsDetectListNewResponseBodyList extends $dara.Model {
  detectContent?: string;
  detectSignName?: string;
  detectTime?: string;
  status?: number;
  successRate?: string;
  templateCode?: string;
  templateParam?: string;
  static names(): { [key: string]: string } {
    return {
      detectContent: 'DetectContent',
      detectSignName: 'DetectSignName',
      detectTime: 'DetectTime',
      status: 'Status',
      successRate: 'SuccessRate',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectContent: 'string',
      detectSignName: 'string',
      detectTime: 'string',
      status: 'number',
      successRate: 'string',
      templateCode: 'string',
      templateParam: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

