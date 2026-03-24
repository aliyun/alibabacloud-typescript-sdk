// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyServiceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyService extends $dara.Model {
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {"language":"java"}
   */
  attributes?: string;
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2025-05-13T03:32:55Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description. This parameter is valid only when serviceType is set to RUM.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name. This parameter is valid only when serviceType is set to RUM.
   * 
   * @example
   * demo应用
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the ARMS application that is compatible with earlier versions.
   * 
   * @example
   * by6rjzro2j@0fe8dfa799e5906
   */
  pid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekxxzuad5zzzz
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * cwzxvuc6uo@4bc6b15ad81f166174ffb
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * demo-app
   */
  serviceName?: string;
  /**
   * @remarks
   * The service status. This parameter is valid only when serviceType is set to RUM.
   * 
   * @example
   * Running
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * TRACE
   */
  serviceType?: string;
  /**
   * @remarks
   * The array of tags.
   */
  tags?: GetServiceResponseBodyServiceTags[];
  /**
   * @remarks
   * The workspace name.
   * 
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
      resourceGroupId: 'resourceGroupId',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceStatus: 'serviceStatus',
      serviceType: 'serviceType',
      tags: 'tags',
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
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceType: 'string',
      tags: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceTags },
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 264C3E89-BE6E-5F82-A484-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @remarks
   * The service object.
   */
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

