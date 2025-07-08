// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContactsListNewResponseBodyList extends $dara.Model {
  email?: string;
  id?: number;
  name?: string;
  openPkgWarning?: number;
  openPreventBrushWarning?: number;
  openSendWarning?: number;
  phone?: string;
  receiveSignTemplateAuditResult?: number;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      id: 'Id',
      name: 'Name',
      openPkgWarning: 'OpenPkgWarning',
      openPreventBrushWarning: 'OpenPreventBrushWarning',
      openSendWarning: 'OpenSendWarning',
      phone: 'Phone',
      receiveSignTemplateAuditResult: 'ReceiveSignTemplateAuditResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      id: 'number',
      name: 'string',
      openPkgWarning: 'number',
      openPreventBrushWarning: 'number',
      openSendWarning: 'number',
      phone: 'string',
      receiveSignTemplateAuditResult: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

