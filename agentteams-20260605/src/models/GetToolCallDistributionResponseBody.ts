// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetToolCallDistributionResponseBodyDataItems extends $dara.Model {
  callCount?: number;
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      callCount: 'CallCount',
      toolName: 'ToolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCount: 'number',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetToolCallDistributionResponseBodyData extends $dara.Model {
  items?: GetToolCallDistributionResponseBodyDataItems[];
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetToolCallDistributionResponseBodyDataItems },
      totalCalls: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetToolCallDistributionResponseBody extends $dara.Model {
  code?: string;
  data?: GetToolCallDistributionResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GetToolCallDistributionResponseBodyData,
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

