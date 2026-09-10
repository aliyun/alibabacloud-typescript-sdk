// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypeResponseBodyResourceTypeHandlersCreate extends $dara.Model {
  /**
   * @remarks
   * The required RAM permissions.
   */
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeHandlersDelete extends $dara.Model {
  /**
   * @remarks
   * The required RAM permissions.
   */
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeHandlersGet extends $dara.Model {
  /**
   * @remarks
   * The required RAM permissions.
   */
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeHandlersList extends $dara.Model {
  /**
   * @remarks
   * The required RAM permissions.
   */
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeHandlersUpdate extends $dara.Model {
  /**
   * @remarks
   * The required RAM permissions.
   */
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeHandlers extends $dara.Model {
  /**
   * @remarks
   * The information associated with the create operation.
   */
  create?: GetResourceTypeResponseBodyResourceTypeHandlersCreate;
  /**
   * @remarks
   * The information associated with the delete operation.
   */
  delete?: GetResourceTypeResponseBodyResourceTypeHandlersDelete;
  /**
   * @remarks
   * The information associated with the get operation.
   */
  get?: GetResourceTypeResponseBodyResourceTypeHandlersGet;
  /**
   * @remarks
   * The information associated with the list operation.
   */
  list?: GetResourceTypeResponseBodyResourceTypeHandlersList;
  /**
   * @remarks
   * The information associated with the update operation.
   */
  update?: GetResourceTypeResponseBodyResourceTypeHandlersUpdate;
  static names(): { [key: string]: string } {
    return {
      create: 'create',
      delete: 'delete',
      get: 'get',
      list: 'list',
      update: 'update',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: GetResourceTypeResponseBodyResourceTypeHandlersCreate,
      delete: GetResourceTypeResponseBodyResourceTypeHandlersDelete,
      get: GetResourceTypeResponseBodyResourceTypeHandlersGet,
      list: GetResourceTypeResponseBodyResourceTypeHandlersList,
      update: GetResourceTypeResponseBodyResourceTypeHandlersUpdate,
    };
  }

  validate() {
    if(this.create && typeof (this.create as any).validate === 'function') {
      (this.create as any).validate();
    }
    if(this.delete && typeof (this.delete as any).validate === 'function') {
      (this.delete as any).validate();
    }
    if(this.get && typeof (this.get as any).validate === 'function') {
      (this.get as any).validate();
    }
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    if(this.update && typeof (this.update as any).validate === 'function') {
      (this.update as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeInfo extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * paid: paid.
   * 
   * free: free.
   * 
   * @example
   * paid
   */
  chargeType?: string;
  /**
   * @remarks
   * The delivery scope. Valid values: 
   * 
   * center: centralized deployment.
   * 
   * region: region-level deployment.
   * 
   * zone: zone-level deployment.
   * 
   * @example
   * region
   */
  deliveryScope?: string;
  /**
   * @remarks
   * The description of the resource type.
   * 
   * @example
   * An ECS instance is equivalent to a virtual machine, including the most basic computing components such as CPU, memory, operating system, network, and disk. You can easily customize and change the configuration of the instance. You have full control over the virtual machine.
   */
  description?: string;
  /**
   * @remarks
   * The name of the resource type.
   * 
   * @example
   * Instance
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      deliveryScope: 'deliveryScope',
      description: 'description',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      deliveryScope: 'string',
      description: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceType extends $dara.Model {
  /**
   * @remarks
   * The properties exclusive to the create operation. These properties are not returned in resource query operations but are required as input parameters for the create operation.
   */
  createOnlyProperties?: string[];
  /**
   * @remarks
   * The properties exclusive to the delete operation. These properties are not returned in resource query operations but are required as input parameters for the delete operation.
   */
  deleteOnlyProperties?: string[];
  /**
   * @remarks
   * The properties that can be used as filter parameters in the list operation.
   */
  filterProperties?: string[];
  /**
   * @remarks
   * The properties exclusive to the get operation. These properties are not returned in resource query operations but are required as input parameters for the get operation.
   */
  getOnlyProperties?: string[];
  /**
   * @remarks
   * The properties returned by the get operation.
   */
  getResponseProperties?: string[];
  /**
   * @remarks
   * The supported resource operations, including RAM permissions.
   */
  handlers?: GetResourceTypeResponseBodyResourceTypeHandlers;
  /**
   * @remarks
   * The basic information about the resource type.
   */
  info?: GetResourceTypeResponseBodyResourceTypeInfo;
  /**
   * @remarks
   * The properties exclusive to the list operation. These properties are not returned in resource query operations but are required as input parameters for the list operation.
   */
  listOnlyProperties?: string[];
  /**
   * @remarks
   * The properties returned by the list operation.
   */
  listResponseProperties?: string[];
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * /properties/InstanceId
   */
  primaryIdentifier?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * ECS
   */
  product?: string;
  /**
   * @remarks
   * The resource property definitions. The key is the property name, and the value is the detailed property information.
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The common properties that represent basic resource attributes. These are not operation-specific properties.
   */
  publicProperties?: string[];
  /**
   * @remarks
   * The read-only properties. These properties are returned only in list or get operations and cannot be used as input parameters for create or update operations.
   */
  readOnlyProperties?: string[];
  /**
   * @remarks
   * The required parameters for resource creation.
   */
  required?: string[];
  /**
   * @remarks
   * The resource type. If the resource has a parent resource, the format is {parentResourceTypeCode/resourceTypeCode}.
   * 
   * @example
   * 无父资源：
   * Instance
   * 有父资源：
   * DBInstance/Account
   */
  resourceType?: string;
  /**
   * @remarks
   * The sensitive properties, such as passwords.
   */
  sensitiveInfoProperties?: string[];
  /**
   * @remarks
   * The properties exclusive to the update operation. These properties are not returned in resource query operations but are required as input parameters for the update operation.
   */
  updateOnlyProperties?: string[];
  /**
   * @remarks
   * The properties that can be modified.
   */
  updateTypeProperties?: string[];
  static names(): { [key: string]: string } {
    return {
      createOnlyProperties: 'createOnlyProperties',
      deleteOnlyProperties: 'deleteOnlyProperties',
      filterProperties: 'filterProperties',
      getOnlyProperties: 'getOnlyProperties',
      getResponseProperties: 'getResponseProperties',
      handlers: 'handlers',
      info: 'info',
      listOnlyProperties: 'listOnlyProperties',
      listResponseProperties: 'listResponseProperties',
      primaryIdentifier: 'primaryIdentifier',
      product: 'product',
      properties: 'properties',
      publicProperties: 'publicProperties',
      readOnlyProperties: 'readOnlyProperties',
      required: 'required',
      resourceType: 'resourceType',
      sensitiveInfoProperties: 'sensitiveInfoProperties',
      updateOnlyProperties: 'updateOnlyProperties',
      updateTypeProperties: 'updateTypeProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      deleteOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      filterProperties: { 'type': 'array', 'itemType': 'string' },
      getOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      getResponseProperties: { 'type': 'array', 'itemType': 'string' },
      handlers: GetResourceTypeResponseBodyResourceTypeHandlers,
      info: GetResourceTypeResponseBodyResourceTypeInfo,
      listOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      listResponseProperties: { 'type': 'array', 'itemType': 'string' },
      primaryIdentifier: 'string',
      product: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      publicProperties: { 'type': 'array', 'itemType': 'string' },
      readOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      required: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      sensitiveInfoProperties: { 'type': 'array', 'itemType': 'string' },
      updateOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      updateTypeProperties: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.createOnlyProperties)) {
      $dara.Model.validateArray(this.createOnlyProperties);
    }
    if(Array.isArray(this.deleteOnlyProperties)) {
      $dara.Model.validateArray(this.deleteOnlyProperties);
    }
    if(Array.isArray(this.filterProperties)) {
      $dara.Model.validateArray(this.filterProperties);
    }
    if(Array.isArray(this.getOnlyProperties)) {
      $dara.Model.validateArray(this.getOnlyProperties);
    }
    if(Array.isArray(this.getResponseProperties)) {
      $dara.Model.validateArray(this.getResponseProperties);
    }
    if(this.handlers && typeof (this.handlers as any).validate === 'function') {
      (this.handlers as any).validate();
    }
    if(this.info && typeof (this.info as any).validate === 'function') {
      (this.info as any).validate();
    }
    if(Array.isArray(this.listOnlyProperties)) {
      $dara.Model.validateArray(this.listOnlyProperties);
    }
    if(Array.isArray(this.listResponseProperties)) {
      $dara.Model.validateArray(this.listResponseProperties);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(Array.isArray(this.publicProperties)) {
      $dara.Model.validateArray(this.publicProperties);
    }
    if(Array.isArray(this.readOnlyProperties)) {
      $dara.Model.validateArray(this.readOnlyProperties);
    }
    if(Array.isArray(this.required)) {
      $dara.Model.validateArray(this.required);
    }
    if(Array.isArray(this.sensitiveInfoProperties)) {
      $dara.Model.validateArray(this.sensitiveInfoProperties);
    }
    if(Array.isArray(this.updateOnlyProperties)) {
      $dara.Model.validateArray(this.updateOnlyProperties);
    }
    if(Array.isArray(this.updateTypeProperties)) {
      $dara.Model.validateArray(this.updateTypeProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * No parent resource:
   * Instance
   * Has parent resource:
   * DBInstance/Account
   */
  resourceType?: GetResourceTypeResponseBodyResourceType;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceType: GetResourceTypeResponseBodyResourceType,
    };
  }

  validate() {
    if(this.resourceType && typeof (this.resourceType as any).validate === 'function') {
      (this.resourceType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

