// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesResponseBodyResourceTypesHandlersCreate extends $dara.Model {
  /**
   * @remarks
   * The RAM permissions required.
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

export class ListResourceTypesResponseBodyResourceTypesHandlersDelete extends $dara.Model {
  /**
   * @remarks
   * The RAM permissions required.
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

export class ListResourceTypesResponseBodyResourceTypesHandlersGet extends $dara.Model {
  /**
   * @remarks
   * The RAM permissions required.
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

export class ListResourceTypesResponseBodyResourceTypesHandlersList extends $dara.Model {
  /**
   * @remarks
   * The RAM permissions required.
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

export class ListResourceTypesResponseBodyResourceTypesHandlersUpdate extends $dara.Model {
  /**
   * @remarks
   * The RAM permissions required.
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

export class ListResourceTypesResponseBodyResourceTypesHandlers extends $dara.Model {
  /**
   * @remarks
   * The information about the create operation.
   */
  create?: ListResourceTypesResponseBodyResourceTypesHandlersCreate;
  /**
   * @remarks
   * The information about the delete operation.
   */
  delete?: ListResourceTypesResponseBodyResourceTypesHandlersDelete;
  /**
   * @remarks
   * The information about the query operation.
   */
  get?: ListResourceTypesResponseBodyResourceTypesHandlersGet;
  /**
   * @remarks
   * The information about the list operation.
   */
  list?: ListResourceTypesResponseBodyResourceTypesHandlersList;
  /**
   * @remarks
   * The information about the update operation.
   */
  update?: ListResourceTypesResponseBodyResourceTypesHandlersUpdate;
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
      create: ListResourceTypesResponseBodyResourceTypesHandlersCreate,
      delete: ListResourceTypesResponseBodyResourceTypesHandlersDelete,
      get: ListResourceTypesResponseBodyResourceTypesHandlersGet,
      list: ListResourceTypesResponseBodyResourceTypesHandlersList,
      update: ListResourceTypesResponseBodyResourceTypesHandlersUpdate,
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

export class ListResourceTypesResponseBodyResourceTypesInfo extends $dara.Model {
  /**
   * @remarks
   * Billing method\\
   * paid free
   * 
   * @example
   * paid
   */
  chargeType?: string;
  /**
   * @remarks
   * The deployment level of the resource.
   * 
   * center
   * 
   * region
   * 
   * zone
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

export class ListResourceTypesResponseBodyResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The properties that are specific to the create operation. You need to specify these properties when you create the resource. These properties are not returned when you query the resource.
   */
  createOnlyProperties?: string[];
  /**
   * @remarks
   * The properties that are specific to the delete operation. You need to specify these properties when you delete the resource. These properties are not returned when you query the resource.
   */
  deleteOnlyProperties?: string[];
  /**
   * @remarks
   * The properties that can be used to filter the resource when you list the resource.
   */
  filterProperties?: string[];
  /**
   * @remarks
   * The properties that are specific to the query operation. You need to specify these properties when you query the resource. These properties are not returned in the query result.
   */
  getOnlyProperties?: string[];
  /**
   * @remarks
   * The properties that are returned when you query the resource.
   */
  getResponseProperties?: string[];
  /**
   * @remarks
   * The information about the operation, including the required Resource Access Management (RAM) permissions.
   */
  handlers?: ListResourceTypesResponseBodyResourceTypesHandlers;
  /**
   * @remarks
   * The information about the resource type.
   */
  info?: ListResourceTypesResponseBodyResourceTypesInfo;
  /**
   * @remarks
   * The properties that are specific to the list operation. You need to specify these properties when you list the resource. These properties are not returned when you query the resource.
   */
  listOnlyProperties?: string[];
  /**
   * @remarks
   * The properties that are returned when you list the resource.
   */
  listResponseProperties?: string[];
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * /properties/InstanceId
   */
  primaryIdentifier?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * ECS
   */
  product?: string;
  /**
   * @remarks
   * The resource properties. The key specifies the property name and the value specifies the details of the property.
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The common properties of the resource. The common properties are not operation-specific.
   */
  publicProperties?: string[];
  /**
   * @remarks
   * The read-only properties. These properties are returned only when you list or query the resource. You do not need to specify these properties when you create or update the resource.
   */
  readOnlyProperties?: string[];
  /**
   * @remarks
   * The properties that must be specified when you create the resource.
   */
  required?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The sensitive properties, such as the password.
   */
  sensitiveInfoProperties?: string[];
  /**
   * @remarks
   * The properties that are specific to the update operation. You need to specify these properties when you update the resource. These properties are not returned when you query the resource.
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
      handlers: ListResourceTypesResponseBodyResourceTypesHandlers,
      info: ListResourceTypesResponseBodyResourceTypesInfo,
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

export class ListResourceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * ECS::Disk
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of a request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource types.
   */
  resourceTypes?: ListResourceTypesResponseBodyResourceTypes[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      resourceTypes: 'resourceTypes',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': ListResourceTypesResponseBodyResourceTypes },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

