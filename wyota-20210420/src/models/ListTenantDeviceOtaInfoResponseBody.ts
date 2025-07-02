// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTenantDeviceOtaInfoResponseBodyData } from "./ListTenantDeviceOtaInfoResponseBodyData";


export class ListTenantDeviceOtaInfoResponseBody extends $dara.Model {
  code?: string;
  data?: ListTenantDeviceOtaInfoResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTenantDeviceOtaInfoResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

