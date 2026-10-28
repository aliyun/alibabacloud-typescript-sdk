// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewNotifyTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The mapping of failed rendering results. The key is the template identifier, and the value is the cause of the failure, such as a template syntax error or a reference to an undefined variable.
   */
  failed?: { [key: string]: any };
  /**
   * @remarks
   * The mapping of successful rendering results. The key is the template identifier, which corresponds to templates[].key in the request, and the value is the rendered string content.
   */
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
  /**
   * @remarks
   * The rendering result object, which contains two mappings: success for successfully rendered items and failed for items that failed to render.
   */
  data?: PreviewNotifyTemplateResponseBodyData;
  /**
   * @remarks
   * The processing result message. The value is success if the request is successful, or an error message if the request fails.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 452faed9-ab3b-4340-8a92-bc7d9b98f17a
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
   */
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

