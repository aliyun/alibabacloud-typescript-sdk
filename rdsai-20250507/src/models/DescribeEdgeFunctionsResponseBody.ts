// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeFunctionsResponseBodyEdgeFunctions extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs used by the cluster.
   * 
   * @example
   * 1
   */
  cpu?: string;
  /**
   * @remarks
   * The time when the function was created.
   * 
   * @example
   * 2021-11-12T21:35:03
   */
  createdTime?: string;
  /**
   * @remarks
   * The edge function name.
   * 
   * @example
   * ef-****
   */
  edgeFunctionName?: string;
  /**
   * @remarks
   * The URL for accessing the function.
   * 
   * @example
   * https://fcnext.console.aliyun.com/cn-beijing/functions/fc****
   */
  functionUrl?: string;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 512
   */
  memorySize?: string;
  /**
   * @remarks
   * The time when the function was last created. The time is displayed in UTC.
   * 
   * @example
   * 2025-05-25 10:22:54 +0800
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The runtime environment for the function, which includes the Linux environment and the Deno version.
   * 
   * @example
   * custom.debian12-deno-2.5.6
   */
  runtime?: string;
  /**
   * @remarks
   * The instance status. For more information, see [Instance state table](https://help.aliyun.com/document_detail/2623972.html).
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The public URL for accessing the application.
   * 
   * @example
   * https://fc-bfvmoi****.cn-beijing.fcapp.run
   */
  urlInternet?: string;
  /**
   * @remarks
   * The internal URL for accessing the application.
   * 
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
  /**
   * @remarks
   * The list of edge functions.
   */
  edgeFunctions?: DescribeEdgeFunctionsResponseBodyEdgeFunctions[];
  /**
   * @remarks
   * The ID of the RDS Supabase instance.
   * 
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

