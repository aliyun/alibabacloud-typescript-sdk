// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstructionsResponseBodyDataInstructions extends $dara.Model {
  /**
   * @remarks
   * The instruction code.
   * 
   * @example
   * Transfer00
   */
  code?: string;
  /**
   * @remarks
   * The instruction configuration, in a JSON string format.
   * 
   * > - `providerId`: The ID of the call center provider. You can obtain this ID by calling the `ListCallCenterProviders` operation.
   * >
   * > - `transferMethod`: The transfer method. Valid values: `BYE`, `BRIDGE`, and `REFER`.
   * >
   * > - `transferType`: The transfer target type. Valid values: `External` (external number), `Agent` (agent), and `SkillGroup` (skill group).
   * >
   * > - `transferTarget`: The transfer target.
   * >
   * > - `transferor`: The caller ID. If not specified, the caller\\"s phone number is used.
   * >
   * > - `timeoutSeconds`: The transfer timeout, in seconds. The default value is 30.
   * 
   * @example
   * {
   * 	"providerId": "xxxxxxxxx",
   * 	"transferMethod": "BYE",
   * 	"transferType": "External",
   * 	"transferTarget": "152******",
   * 	"transferor": "01*****",
   * 	"timeoutSeconds": "10"
   * }
   */
  config?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  /**
   * @remarks
   * The instruction name.
   * 
   * @example
   * 转人工指令一
   */
  name?: string;
  /**
   * @remarks
   * The instruction type.
   * 
   * @example
   * TRANSFER
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      config: 'Config',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      config: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstructionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of instructions.
   */
  instructions?: ListInstructionsResponseBodyDataInstructions[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of instructions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instructions: 'Instructions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instructions: { 'type': 'array', 'itemType': ListInstructionsResponseBodyDataInstructions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instructions)) {
      $dara.Model.validateArray(this.instructions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstructionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned for the list of instructions.
   */
  data?: ListInstructionsResponseBodyData;
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
   * The result message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * A list of request parameters that are echoed in the response.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * e48e45dd-e47a-4744-a063-f08cbebb1c5a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInstructionsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

