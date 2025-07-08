// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCardSmsHistoryRequest extends $dara.Model {
  apiSend?: number;
  cardTemplateType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtCreate?: string;
  receiveState?: number;
  receiver?: string;
  renderState?: number;
  signName?: string;
  tmpCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiSend: 'ApiSend',
      cardTemplateType: 'CardTemplateType',
      gmtCreate: 'GmtCreate',
      receiveState: 'ReceiveState',
      receiver: 'Receiver',
      renderState: 'RenderState',
      signName: 'SignName',
      tmpCode: 'TmpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSend: 'number',
      cardTemplateType: 'string',
      gmtCreate: 'string',
      receiveState: 'number',
      receiver: 'string',
      renderState: 'number',
      signName: 'string',
      tmpCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

