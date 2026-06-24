// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigRuntimeModelTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the execution fails.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned if the execution fails.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned if the execution fails.
   * 
   * @example
   * The parameter callerUid may not be null.
   */
  message?: string;
  /**
   * @remarks
   * The Agent runtime ID. The ID mapping is as follows:
   * 
   * JVS Computer: JVS Computer ID, in the format of jvs-xxxx.
   * 
   * OpenClaw: cloud computer ID, in the format of ecd-xxxx.
   * 
   * Hermes Agent: Hermes Agent ID, in the format of jvs-xxxx.
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
   * The total number of entries.
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

