// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClothesResponseBodyData extends $dara.Model {
  coverUrl?: string;
  createTime?: string;
  id?: string;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  part?: string;
  size?: string;
  status?: { [key: string]: string };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      part: 'Part',
      size: 'Size',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      id: 'string',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      part: 'string',
      size: 'string',
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.status) {
      $dara.Model.validateMap(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClothesResponseBody extends $dara.Model {
  code?: string;
  current?: number;
  data?: ListClothesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListClothesResponseBodyData },
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
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

