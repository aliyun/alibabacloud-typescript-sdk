// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportPptArtifactResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * adb8146b-146b-4206-bd40-19f591e85293
   */
  exportTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'ExportTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportPptArtifactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * The export task details.
   */
  data?: ExportPptArtifactResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request succeeded.
   */
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
      data: ExportPptArtifactResponseBodyData,
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

