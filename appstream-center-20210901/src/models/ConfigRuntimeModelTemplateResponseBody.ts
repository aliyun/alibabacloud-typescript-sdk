// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigRuntimeModelTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the execution fails.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned when the execution fails.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned when the execution fails.
   * 
   * @example
   * The parameter callerUid may not be null.
   */
  message?: string;
  /**
   * @remarks
   * The agent runtime ID. The ID mappings are as follows:
   * 
   * JVS Computer: the JVS Computer ID, in the format of jvs-xxxx.
   * 
   * OpenClaw: the cloud desktop ID, in the format of ecd-xxxx.
   * 
   * Hermes Agent: the Hermes Agent ID, in the format of jvs-xxxx.
   * 
   * @example
   * jvs-xxxxxxxx
   */
  runtimeId?: string;
  /**
   * @remarks
   * Indicates whether the execution is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      runtimeId: 'RuntimeId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
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

export class ConfigRuntimeModelTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of execution results.
   */
  data?: ConfigRuntimeModelTemplateResponseBodyData[];
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
   * The total count.
   * 
   * @example
   * 6
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
      data: { 'type': 'array', 'itemType': ConfigRuntimeModelTemplateResponseBodyData },
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

