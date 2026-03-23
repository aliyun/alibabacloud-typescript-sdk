// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhitelistTemplateLinkedInstanceResponseBodyData extends $dara.Model {
  insName?: string[];
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      insName: 'InsName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insName: { 'type': 'array', 'itemType': 'string' },
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.insName)) {
      $dara.Model.validateArray(this.insName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistTemplateLinkedInstanceResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeWhitelistTemplateLinkedInstanceResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeWhitelistTemplateLinkedInstanceResponseBodyData,
      httpStatusCode: 'number',
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

