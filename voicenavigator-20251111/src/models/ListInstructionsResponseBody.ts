// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstructionsResponseBodyDataInstructions extends $dara.Model {
  /**
   * @example
   * Transfer00
   */
  code?: string;
  /**
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
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  name?: string;
  /**
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
  instructions?: ListInstructionsResponseBodyDataInstructions[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListInstructionsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  params?: string[];
  /**
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

