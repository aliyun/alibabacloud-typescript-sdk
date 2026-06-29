// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDownStreamResponseBodyInstanceRelationListFieldInstanceList extends $dara.Model {
  /**
   * @remarks
   * Field instance ID.
   * 
   * @example
   * t_23211
   */
  fieldInstanceId?: string;
  /**
   * @remarks
   * Run status.
   * 
   * @example
   * SUCCESS
   */
  runStatus?: string;
  /**
   * @remarks
   * Selection status of the instance.
   * 
   * @example
   * OPTIONAL
   */
  selectStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceId: 'FieldInstanceId',
      runStatus: 'RunStatus',
      selectStatus: 'SelectStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceId: 'string',
      runStatus: 'string',
      selectStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamResponseBodyInstanceRelationListInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * t_232411
   */
  id?: string;
  /**
   * @remarks
   * Instance name.
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * Node type.
   * 
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamResponseBodyInstanceRelationList extends $dara.Model {
  /**
   * @remarks
   * Depth level.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @remarks
   * Extended information of the node instance.
   * 
   * @example
   * {"a":"x"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * Field instance list.
   */
  fieldInstanceList?: GetInstanceDownStreamResponseBodyInstanceRelationListFieldInstanceList[];
  /**
   * @remarks
   * Instance information.
   */
  instanceInfo?: GetInstanceDownStreamResponseBodyInstanceRelationListInstanceInfo;
  /**
   * @remarks
   * Run status of the instance.
   * 
   * @example
   * RUNNING
   */
  runStatus?: string;
  /**
   * @remarks
   * Selection status of the instance, primarily used for logical fields.
   * - OPTIONAL: Optional.
   * - SELECTED: Required.
   * - DISABLE: Not selectable.
   * - GROUP_SELECTED: Select all or deselect all.
   * 
   * @example
   * OPTIONAL
   */
  selectStatus?: string;
  /**
   * @remarks
   * Reason why the instance is selected.
   * - PK_CHANGE
   * - LOGIC_CHANGE
   * - RELATION
   * - BIZ_RELATIO
   * - MV_RELATION
   * - MODEL_REFRESH
   * - FIELD_DELETED
   * - FIELD_ADDED_NO_INSTANCE
   * - PERMISSION_DENY
   * - OUTSIDE_INCOMING
   * - INSTANCE_STATUS
   * - AFFECT_BY_UPSTREAM
   * 
   * @example
   * FIELD_DELETED
   */
  selectStatusCause?: string;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      extendInfo: 'ExtendInfo',
      fieldInstanceList: 'FieldInstanceList',
      instanceInfo: 'InstanceInfo',
      runStatus: 'RunStatus',
      selectStatus: 'SelectStatus',
      selectStatusCause: 'SelectStatusCause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      extendInfo: 'string',
      fieldInstanceList: { 'type': 'array', 'itemType': GetInstanceDownStreamResponseBodyInstanceRelationListFieldInstanceList },
      instanceInfo: GetInstanceDownStreamResponseBodyInstanceRelationListInstanceInfo,
      runStatus: 'string',
      selectStatus: 'string',
      selectStatusCause: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldInstanceList)) {
      $dara.Model.validateArray(this.fieldInstanceList);
    }
    if(this.instanceInfo && typeof (this.instanceInfo as any).validate === 'function') {
      (this.instanceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. OK indicates a successful request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Downstream instances and dependency relationships.
   */
  instanceRelationList?: GetInstanceDownStreamResponseBodyInstanceRelationList[];
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
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
      instanceRelationList: 'InstanceRelationList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceRelationList: { 'type': 'array', 'itemType': GetInstanceDownStreamResponseBodyInstanceRelationList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceRelationList)) {
      $dara.Model.validateArray(this.instanceRelationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

