// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchConfigRuntimeChannelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The third-party channel code.
   * 
   * @example
   * dingtalk-connector
   */
  code?: string;
  /**
   * @remarks
   * The error code returned when the configuration fails. This parameter is returned only when Success is false.
   * 
   * @example
   * ConfigFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error description returned when the configuration fails. This parameter is returned only when Success is false.
   * 
   * @example
   * The runtime is not found.
   */
  message?: string;
  /**
   * @remarks
   * The agent runtime ID.
   * 
   * @example
   * ecd-xgads
   */
  runtimeId?: string;
  /**
   * @remarks
   * Indicates whether the channel configuration item is configured successfully. Valid values:
   * 
   * - true: The configuration is successful.
   * - false: The configuration fails. For the cause of the failure, see ErrorCode and Message.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      runtimeId: 'RuntimeId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      runtimeId: 'string',
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

export class BatchConfigRuntimeChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of batch configuration results. Each channel configuration item corresponds to one result.
   */
  data?: BatchConfigRuntimeChannelResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of configuration results, which is the same as the number of configuration items in ChannelConfigs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': BatchConfigRuntimeChannelResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

