// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyData extends $dara.Model {
  clusterId?: string;
  instance?: string;
  kernelVersion?: string;
  meta?: any;
  osArch?: string;
  osHealthScore?: string;
  osName?: string;
  osNameId?: string;
  osVersion?: string;
  osVersionId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      instance: 'instance',
      kernelVersion: 'kernel_version',
      meta: 'meta',
      osArch: 'os_arch',
      osHealthScore: 'os_health_score',
      osName: 'os_name',
      osNameId: 'os_name_id',
      osVersion: 'os_version',
      osVersionId: 'os_version_id',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: 'string',
      kernelVersion: 'string',
      meta: 'any',
      osArch: 'string',
      osHealthScore: 'string',
      osName: 'string',
      osNameId: 'string',
      osVersion: 'string',
      osVersionId: 'string',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: ListInstancesResponseBodyData[];
  /**
   * @example
   * Requests for llm service failed
   */
  message?: string;
  /**
   * @example
   * 9515E5A0-8905-59B0-9BBF-5F0BE568C3A0
   */
  requestId?: string;
  /**
   * @example
   * 623
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListInstancesResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
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

