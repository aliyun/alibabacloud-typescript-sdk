// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLabelsResponseBodyData extends $dara.Model {
  content?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  labelId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      labelId: 'LabelId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      labelId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsResponseBody extends $dara.Model {
  code?: string;
  data?: ListLabelsResponseBodyData[];
  message?: string;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListLabelsResponseBodyData },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
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

