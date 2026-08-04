// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWmExtractTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2024-01-01 11:22:33
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the file that was provided when the extraction task was created.
   * 
   * @example
   * test-****.pdf
   */
  filename?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - **Running**: The task is running.
   * 
   * - **Success**: The task is successful.
   * 
   * - **Failed**: The task failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * wmt-9648c22d2eb2cb57bb855dcae7898464********
   */
  taskId?: string;
  /**
   * @remarks
   * The extracted watermark information as a Base64-encoded string.
   * 
   * @example
   * aGVsbG8gc2Fz****
   */
  wmInfoBytesB64?: string;
  /**
   * @remarks
   * The size of the watermark information, which was provided when the extraction task was created.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * The extracted watermark information in decimal format.
   * 
   * @example
   * 123**
   */
  wmInfoUint?: number;
  /**
   * @remarks
   * The watermark type that was provided when the extraction task was created.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      filename: 'Filename',
      status: 'Status',
      taskId: 'TaskId',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      filename: 'string',
      status: 'string',
      taskId: 'string',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'number',
      wmType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmExtractTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task result.
   */
  data?: GetWmExtractTaskResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWmExtractTaskResponseBodyData,
      requestId: 'string',
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

