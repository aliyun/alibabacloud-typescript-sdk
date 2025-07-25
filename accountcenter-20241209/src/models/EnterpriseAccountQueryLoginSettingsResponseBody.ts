// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseAccountQueryLoginSettingsResponseBodyData } from "./EnterpriseAccountQueryLoginSettingsResponseBodyData";


export class EnterpriseAccountQueryLoginSettingsResponseBody extends $dara.Model {
  code?: string;
  data?: EnterpriseAccountQueryLoginSettingsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EnterpriseAccountQueryLoginSettingsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

