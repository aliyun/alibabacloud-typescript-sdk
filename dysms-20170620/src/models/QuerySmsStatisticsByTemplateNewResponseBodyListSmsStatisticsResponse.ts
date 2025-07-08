// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsStatisticsByTemplateNewResponseBodyListSmsStatisticsResponse extends $dara.Model {
  detailStsDate?: string;
  downloadUrl?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  sendSuccessRate?: string;
  sendTotal?: number;
  sendTotalFail?: number;
  sendTotalSuccess?: number;
  sendTotalUnknown?: number;
  status?: string;
  templateCode?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      detailStsDate: 'DetailStsDate',
      downloadUrl: 'DownloadUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      sendSuccessRate: 'SendSuccessRate',
      sendTotal: 'SendTotal',
      sendTotalFail: 'SendTotalFail',
      sendTotalSuccess: 'SendTotalSuccess',
      sendTotalUnknown: 'SendTotalUnknown',
      status: 'Status',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailStsDate: 'string',
      downloadUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      sendSuccessRate: 'string',
      sendTotal: 'number',
      sendTotalFail: 'number',
      sendTotalSuccess: 'number',
      sendTotalUnknown: 'number',
      status: 'string',
      templateCode: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

