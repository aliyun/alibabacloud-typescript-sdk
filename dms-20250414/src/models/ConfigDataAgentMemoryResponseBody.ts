// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigDataAgentMemoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable memory generation. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether memory recall usage is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  recallEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      recallEnabled: 'RecallEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      recallEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataAgentMemoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: ConfigDataAgentMemoryResponseBodyData;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ConfigDataAgentMemoryResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

