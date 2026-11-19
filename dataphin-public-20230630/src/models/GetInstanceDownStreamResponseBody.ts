// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDownStreamResponseBodyInstanceRelationListFieldInstanceList extends $dara.Model {
  /**
   * @remarks
   * The field instance ID.
   * 
   * @example
   * t_23211
   */
  fieldInstanceId?: string;
  /**
   * @remarks
   * The run status.
   * 
   * @example
   * SUCCESS
   */
  runStatus?: string;
  /**
   * @remarks
   * The selection status of the instance.
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
   * The instance ID.
   * 
   * @example
   * t_232411
   */
  id?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * xx test
   */
  name?: string;
  /**
   * @remarks
   * The node type.
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
   * The level.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @remarks
   * The extended information of the node instance.
   * 
   * @example
   * {"a":"x"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The list of field instances.
   */
  fieldInstanceList?: GetInstanceDownStreamResponseBodyInstanceRelationListFieldInstanceList[];
  /**
   * @remarks
   * The instance information.
   */
  instanceInfo?: GetInstanceDownStreamResponseBodyInstanceRelationListInstanceInfo;
  /**
   * @remarks
   * The run status of the instance.
   * 
   * @example
   * RUNNING
   */
  runStatus?: string;
  /**
   * @remarks
   * The selection status of the instance. This is mainly used for logical fields. Valid values:
   * - OPTIONAL: optional.
   * - SELECTED: required.
   * - DISABLE: unavailable.
   * - GROUP_SELECTED: all selected or all unselected.
   * 
   * @example
   * OPTIONAL
   */
  selectStatus?: string;
  /**
   * @remarks
   * The reason why the instance is selected. Valid values:
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
   * The error code. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code of the backend response.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The downstream and dependency relationships.
   */
  instanceRelationList?: GetInstanceDownStreamResponseBodyInstanceRelationList[];
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
   * Indicates whether the request is successful.
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

