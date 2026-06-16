// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirusScanOnceTaskResponseBodyData extends $dara.Model {
  businessType?: string;
  platform?: string;
  requestId?: string;
  selectionKey?: number;
  targetType?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      platform: 'Platform',
      requestId: 'RequestId',
      selectionKey: 'SelectionKey',
      targetType: 'TargetType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      platform: 'string',
      requestId: 'string',
      selectionKey: 'number',
      targetType: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirusScanOnceTaskResponseBody extends $dara.Model {
  code?: string;
  data?: CreateVirusScanOnceTaskResponseBodyData;
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
      data: CreateVirusScanOnceTaskResponseBodyData,
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

