// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAreaMapResponseBody extends $dara.Model {
  code?: string;
  current?: number;
  data?: { [key: string]: any };
  errorName?: string;
  httpCode?: number;
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

