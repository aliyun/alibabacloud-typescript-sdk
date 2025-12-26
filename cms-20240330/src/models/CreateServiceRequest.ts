// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRequestTags extends $dara.Model {
  /**
   * @example
   * env
   */
  key?: string;
  /**
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
   * Extended attributes.
   * 
   * @example
   * {"language":"java"}
   */
  attributes?: string;
  /**
   * @remarks
   * Service description, only valid when `serviceType=RUM`.
   * 
   * @example
   * mag测试应用
   */
  description?: string;
  /**
   * @remarks
   * Display name, only valid when `serviceType=RUM`.
   * 
   * @example
   * mag测试应用
   */
  displayName?: string;
  /**
   * @remarks
   * Application ID, generally not required to be specified.
   * 
   * @example
   * bx3udsi5ie@ed2ba6beebdb6de
   */
  pid?: string;
  /**
   * @example
   * rg-xxekxxzuad5zzzz
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Service name
   * 
   * This parameter is required.
   * 
   * @example
   * mag_test
   */
  serviceName?: string;
  /**
   * @remarks
   * Service status, not required for service creation.
   * 
   * @example
   * Created
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Service type
   * 
   * This parameter is required.
   * 
   * @example
   * TRACE
   */
  serviceType?: string;
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

