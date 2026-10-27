// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewNotifyTemplateResponseBodyData extends $dara.Model {
  failed?: { [key: string]: any };
  success?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      failed: 'failed',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.failed) {
      $dara.Model.validateMap(this.failed);
    }
    if(this.success) {
      $dara.Model.validateMap(this.success);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewNotifyTemplateResponseBody extends $dara.Model {
  data?: PreviewNotifyTemplateResponseBodyData;
  /**
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * 请求ID
   * 
   * @example
   * 452faed9-ab3b-4340-8a92-bc7d9b98f17a
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      msg: 'msg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PreviewNotifyTemplateResponseBodyData,
      msg: 'string',
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

