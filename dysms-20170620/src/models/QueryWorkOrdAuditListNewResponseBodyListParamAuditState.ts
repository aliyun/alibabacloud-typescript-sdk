// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorkOrdAuditListNewResponseBodyListParamAuditState extends $dara.Model {
  key?: string;
  name?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

