// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceUpDownStreamResponseBodyInstanceDagInfoDownInstanceList extends $dara.Model {
  /**
   * @remarks
   * The list of field IDs.
   */
  fieldInstanceIdList?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * t_1234567
   */
  id?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_1234567
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceIdList: 'FieldInstanceIdList',
      id: 'Id',
      name: 'Name',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      nodeId: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldInstanceIdList)) {
      $dara.Model.validateArray(this.fieldInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamResponseBodyInstanceDagInfoStartInstanceList extends $dara.Model {
  /**
   * @remarks
   * The list of field IDs.
   */
  fieldInstanceIdList?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * t_1234567
   */
  id?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_1234567
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * - DATA_PROCESS: code node.
   * - BBOX_LOGIC_TABLE_NODE: logical table node.
   * - PIPELINE_NODE: pipeline node.
   * 
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceIdList: 'FieldInstanceIdList',
      id: 'Id',
      name: 'Name',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      nodeId: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldInstanceIdList)) {
      $dara.Model.validateArray(this.fieldInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamResponseBodyInstanceDagInfoUpInstanceList extends $dara.Model {
  /**
   * @remarks
   * The list of field IDs.
   */
  fieldInstanceIdList?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * t_1234567
   */
  id?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_1234567
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceIdList: 'FieldInstanceIdList',
      id: 'Id',
      name: 'Name',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      nodeId: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldInstanceIdList)) {
      $dara.Model.validateArray(this.fieldInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamResponseBodyInstanceDagInfo extends $dara.Model {
  /**
   * @remarks
   * The downstream instances.
   */
  downInstanceList?: GetInstanceUpDownStreamResponseBodyInstanceDagInfoDownInstanceList[];
  /**
   * @remarks
   * The center instances.
   */
  startInstanceList?: GetInstanceUpDownStreamResponseBodyInstanceDagInfoStartInstanceList[];
  /**
   * @remarks
   * The upstream instances.
   */
  upInstanceList?: GetInstanceUpDownStreamResponseBodyInstanceDagInfoUpInstanceList[];
  static names(): { [key: string]: string } {
    return {
      downInstanceList: 'DownInstanceList',
      startInstanceList: 'StartInstanceList',
      upInstanceList: 'UpInstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downInstanceList: { 'type': 'array', 'itemType': GetInstanceUpDownStreamResponseBodyInstanceDagInfoDownInstanceList },
      startInstanceList: { 'type': 'array', 'itemType': GetInstanceUpDownStreamResponseBodyInstanceDagInfoStartInstanceList },
      upInstanceList: { 'type': 'array', 'itemType': GetInstanceUpDownStreamResponseBodyInstanceDagInfoUpInstanceList },
    };
  }

  validate() {
    if(Array.isArray(this.downInstanceList)) {
      $dara.Model.validateArray(this.downInstanceList);
    }
    if(Array.isArray(this.startInstanceList)) {
      $dara.Model.validateArray(this.startInstanceList);
    }
    if(Array.isArray(this.upInstanceList)) {
      $dara.Model.validateArray(this.upInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The instance dag data, including the current instance and its upstream and downstream instances.
   */
  instanceDagInfo?: GetInstanceUpDownStreamResponseBodyInstanceDagInfo;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceDagInfo: 'InstanceDagInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceDagInfo: GetInstanceUpDownStreamResponseBodyInstanceDagInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instanceDagInfo && typeof (this.instanceDagInfo as any).validate === 'function') {
      (this.instanceDagInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

