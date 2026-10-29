// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCaptureRenderingInstanceScreenshotResponseBodyDatatestResult extends $dara.Model {
  /**
   * @remarks
   * The number of successful instances.
   * 
   * @example
   * 1
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCaptureRenderingInstanceScreenshotResponseBodyDatatest extends $dara.Model {
  /**
   * @remarks
   * The pre-check result.
   */
  result?: BatchCaptureRenderingInstanceScreenshotResponseBodyDatatestResult;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: BatchCaptureRenderingInstanceScreenshotResponseBodyDatatestResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCaptureRenderingInstanceScreenshotResponseBodyFailedItems extends $dara.Model {
  /**
   * @remarks
   * The error code for the failure.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * Not Applied
   */
  errMessage?: string;
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * @example
   * render-072da95539d3402da90353b244191722
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCaptureRenderingInstanceScreenshotResponseBodySuccessItems extends $dara.Model {
  /**
   * @remarks
   * The time when the screenshot was created. The time is displayed in the ISO 8601 standard with a time zone offset in the YYYY-MM-DDTHH:mm:ss+HH:mm format.
   * 
   * @example
   * 2026-05-19T14:46:37+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The download URL of the screenshot.
   * 
   * @example
   * https://testts-1.oss-cn-beijing.aliyuncs.com/app/test-zip-file.zip
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * @example
   * render-1ada8cd82783407b99fa202826fc6447
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      downloadUrl: 'DownloadUrl',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      downloadUrl: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCaptureRenderingInstanceScreenshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data pre-check result.
   */
  datatest?: BatchCaptureRenderingInstanceScreenshotResponseBodyDatatest;
  /**
   * @remarks
   * The number of failed instances.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The list of instances for which screenshot capture failed.
   */
  failedItems?: BatchCaptureRenderingInstanceScreenshotResponseBodyFailedItems[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The number of successful instances.
   * 
   * @example
   * 1
   */
  successCount?: number;
  /**
   * @remarks
   * The list of successful instances.
   */
  successItems?: BatchCaptureRenderingInstanceScreenshotResponseBodySuccessItems[];
  static names(): { [key: string]: string } {
    return {
      datatest: 'Datatest',
      failedCount: 'FailedCount',
      failedItems: 'FailedItems',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      successItems: 'SuccessItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datatest: BatchCaptureRenderingInstanceScreenshotResponseBodyDatatest,
      failedCount: 'number',
      failedItems: { 'type': 'array', 'itemType': BatchCaptureRenderingInstanceScreenshotResponseBodyFailedItems },
      requestId: 'string',
      successCount: 'number',
      successItems: { 'type': 'array', 'itemType': BatchCaptureRenderingInstanceScreenshotResponseBodySuccessItems },
    };
  }

  validate() {
    if(this.datatest && typeof (this.datatest as any).validate === 'function') {
      (this.datatest as any).validate();
    }
    if(Array.isArray(this.failedItems)) {
      $dara.Model.validateArray(this.failedItems);
    }
    if(Array.isArray(this.successItems)) {
      $dara.Model.validateArray(this.successItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

