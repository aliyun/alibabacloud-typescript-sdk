// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoGenerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The downstream task ID.
   * 
   * @example
   * 778fa8bd21804828a5d147050e30edac
   */
  taskId?: string;
  /**
   * @remarks
   * The metering and usage information.
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoGenerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of success indicates that the call is successful, and a value of failed indicates that the call fails.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The struct information of the returned result.
   */
  data?: VideoGenerationResponseBodyData;
  /**
   * @remarks
   * The returned message. An error message is returned when the call fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to identify a unique request call.
   * 
   * @example
   * 70CBEFDF-BB17-1EB3-8A21-569F3124738F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success, and a value of false indicates failure.
   * 
   * @example
   * true
   */
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
      data: VideoGenerationResponseBodyData,
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

