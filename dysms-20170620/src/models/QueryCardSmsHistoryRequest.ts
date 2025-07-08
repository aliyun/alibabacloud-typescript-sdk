// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsHistoryRequest extends $dara.Model {
  apiSend?: number;
  cardTemplateType?: string;
  gmtCreate?: string;
  maxId?: number;
  minId?: number;
  pageNo?: number;
  pageSize?: number;
  receiveState?: number;
  receiver?: string;
  renderState?: number;
  signName?: string;
  tmpCode?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      apiSend: 'ApiSend',
      cardTemplateType: 'CardTemplateType',
      gmtCreate: 'GmtCreate',
      maxId: 'MaxId',
      minId: 'MinId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      receiveState: 'ReceiveState',
      receiver: 'Receiver',
      renderState: 'RenderState',
      signName: 'SignName',
      tmpCode: 'TmpCode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSend: 'number',
      cardTemplateType: 'string',
      gmtCreate: 'string',
      maxId: 'number',
      minId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      receiveState: 'number',
      receiver: 'string',
      renderState: 'number',
      signName: 'string',
      tmpCode: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

