// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The `key` of the tag.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The `value` of the tag.
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

export class CreateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The extended properties.
   * 
   * @example
   * {"language":"java"}
   */
  attributes?: string;
  /**
   * @remarks
   * The service description. This parameter is valid only when serviceType is set to RUM.
   * 
   * @example
   * mag测试应用
   */
  description?: string;
  /**
   * @remarks
   * The display name. This parameter is valid only when serviceType is set to RUM.
   * 
   * @example
   * mag测试应用
   */
  displayName?: string;
  /**
   * @remarks
   * The application ID. You do not typically need to specify this parameter.
   * 
   * @example
   * bx3udsi5ie@ed2ba6beebdb6de
   */
  pid?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * mag_test
   */
  serviceName?: string;
  /**
   * @remarks
   * The service status. Do not specify this parameter when you create a service.
   * 
   * @example
   * Created
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The service type.
   * 
   * This parameter is required.
   * 
   * @example
   * TRACE
   */
  serviceType?: string;
  /**
   * @remarks
   * An array of tags.
   */
  tags?: CreateServiceRequestTags[];
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      description: 'description',
      displayName: 'displayName',
      pid: 'pid',
      resourceGroupId: 'resourceGroupId',
      serviceName: 'serviceName',
      serviceStatus: 'serviceStatus',
      serviceType: 'serviceType',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      description: 'string',
      displayName: 'string',
      pid: 'string',
      resourceGroupId: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceType: 'string',
      tags: { 'type': 'array', 'itemType': CreateServiceRequestTags },
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

