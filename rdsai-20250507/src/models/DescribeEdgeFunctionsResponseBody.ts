// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeFunctionsResponseBodyEdgeFunctions extends $dara.Model {
  /**
   * @example
   * 1
   */
  cpu?: string;
  /**
   * @example
   * 2021-11-12T21:35:03
   */
  createdTime?: string;
  /**
   * @example
   * ef-****
   */
  edgeFunctionName?: string;
  /**
   * @example
   * https://fcnext.console.aliyun.com/cn-beijing/functions/fc****
   */
  functionUrl?: string;
  /**
   * @example
   * 512
   */
  memorySize?: string;
  /**
   * @example
   * 2025-05-25 10:22:54 +0800
   */
  modifiedTime?: string;
  /**
   * @example
   * custom.debian12-deno-2.5.6
   */
  runtime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * https://fc-bfvmoi****.cn-beijing.fcapp.run
   */
  urlInternet?: string;
  /**
   * @example
   * https://fc-bfvmoi****.cn-beijing-vpc.fcapp.run
   */
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      createdTime: 'CreatedTime',
      edgeFunctionName: 'EdgeFunctionName',
      functionUrl: 'FunctionUrl',
      memorySize: 'MemorySize',
      modifiedTime: 'ModifiedTime',
      runtime: 'Runtime',
      status: 'Status',
      urlInternet: 'UrlInternet',
      urlIntranet: 'UrlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      createdTime: 'string',
      edgeFunctionName: 'string',
      functionUrl: 'string',
      memorySize: 'string',
      modifiedTime: 'string',
      runtime: 'string',
      status: 'string',
      urlInternet: 'string',
      urlIntranet: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeFunctionsResponseBody extends $dara.Model {
  edgeFunctions?: DescribeEdgeFunctionsResponseBodyEdgeFunctions[];
  /**
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      edgeFunctions: 'EdgeFunctions',
      instanceName: 'InstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeFunctions: { 'type': 'array', 'itemType': DescribeEdgeFunctionsResponseBodyEdgeFunctions },
      instanceName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.edgeFunctions)) {
      $dara.Model.validateArray(this.edgeFunctions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

