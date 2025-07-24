// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyService extends $dara.Model {
  /**
   * @example
   * {"language":"java"}
   */
  attributes?: string;
  /**
   * @example
   * 2025-05-13T03:32:55Z
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  description?: string;
  displayName?: string;
  /**
   * @example
   * by6rjzro2j@0fe8dfa799e5906
   */
  pid?: string;
  /**
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @example
   * cwzxvuc6uo@4bc6b15ad81f166174ffb
   */
  serviceId?: string;
  /**
   * @example
   * demo-app
   */
  serviceName?: string;
  /**
   * @example
   * Running
   */
  serviceStatus?: string;
  /**
   * @example
   * TRACE
   */
  serviceType?: string;
  /**
   * @example
   * default-cms-1106439496876715-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      pid: 'pid',
      regionId: 'regionId',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceStatus: 'serviceStatus',
      serviceType: 'serviceType',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      pid: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceType: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $dara.Model {
  /**
   * @example
   * 264C3E89-BE6E-5F82-A484-CE9C2196C7DC
   */
  requestId?: string;
  service?: GetServiceResponseBodyService;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      service: GetServiceResponseBodyService,
    };
  }

  validate() {
    if(this.service && typeof (this.service as any).validate === 'function') {
      (this.service as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

