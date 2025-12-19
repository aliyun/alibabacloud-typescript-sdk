// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationParamsResponseBodyData extends $dara.Model {
  /**
   * @example
   * {
   *       "tags": {
   *         "controlType": "KeyValue",
   *         "display": "Label",
   *         "orderBy": 0,
   *         "associatedLabel": true,
   *         "required": true
   *       }
   *     }
   */
  attributes?: { [key: string]: any };
  /**
   * @example
   * rename
   */
  operation?: string;
  /**
   * @example
   * {
   *       "instance_id": {
   *         "display": "ECS instance ID",
   *         "dataType": "String",
   *         "orderBy": 0,
   *         "attributeName": "instance_id",
   *         "enableVariable": "String",
   *         "required": true
   *       },
   *       "instance_name": {
   *         "display": "ECS name",
   *         "dataType": "String",
   *         "orderBy": 0,
   *         "attributeName": "instance_name",
   *         "required": true
   *       },
   *       "private_ip": {
   *         "display": "Intranet IP",
   *         "dataType": "String",
   *         "orderBy": 0,
   *         "value": "private_ip",
   *         "required": true
   *       }
   *     }
   */
  outputs?: { [key: string]: any };
  /**
   * @example
   * {
   *       "instanceId": "ResourceId",
   *       "regionId": "region",
   *       "appId": "appId"
   *     }
   */
  properties?: { [key: string]: any };
  /**
   * @example
   * ecs
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      operation: 'Operation',
      outputs: 'Outputs',
      properties: 'Properties',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      operation: 'string',
      outputs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      service: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(this.outputs) {
      $dara.Model.validateMap(this.outputs);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationParamsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetOperationParamsResponseBodyData;
  /**
   * @example
   * getBpmOperationParams errors
   */
  message?: string;
  /**
   * @example
   * F439A659-3B3D-50FB-A4BC-69FBF16413C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOperationParamsResponseBodyData,
      message: 'string',
      requestId: 'string',
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

