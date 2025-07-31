// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDownStreamResponseBodyInstanceRelationListFieldInstanceList extends $dara.Model {
  /**
   * @example
   * t_23211
   */
  fieldInstanceId?: string;
  /**
   * @example
   * SUCCESS
   */
  runStatus?: string;
  /**
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
   * @example
   * t_232411
   */
  id?: string;
  name?: string;
  /**
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
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * {"a":"x"}
   */
  extendInfo?: string;
  fieldInstanceList?: GetInstanceDownStreamResponseBodyInstanceRelationListFieldInstanceList[];
  instanceInfo?: GetInstanceDownStreamResponseBodyInstanceRelationListInstanceInfo;
  /**
   * @example
   * RUNNING
   */
  runStatus?: string;
  /**
   * @example
   * OPTIONAL
   */
  selectStatus?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  instanceRelationList?: GetInstanceDownStreamResponseBodyInstanceRelationList[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
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

