// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAnnotationMissionTagInfoListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of successfully executed operations.
   * 
   * @example
   * 1
   */
  execCount?: number;
  /**
   * @remarks
   * The API response message.
   * 
   * @example
   * 执行失败：查找元素或操作超时，outTaskId：trademark_regnew_public_cn-uax33hol2uu，flowId：null，nodeUUID：541b6c71-8cce-4ab0-af84-713ca9741821
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      execCount: 'ExecCount',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execCount: 'number',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAnnotationMissionTagInfoListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: SaveAnnotationMissionTagInfoListResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The API response message.
   * 
   * @example
   * 执行失败：查找元素或操作超时，outTaskId：trademark_regnew_public_cn-uax33hol2uu,flowId：null，nodeUUID：541b6c71-8cce-4ab0-af84-713ca9741821
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B356EDC-F69A-53B0-B4AF-2AC42200684E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed.
   * 
   * @example
   * true
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
      data: SaveAnnotationMissionTagInfoListResponseBodyData,
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

