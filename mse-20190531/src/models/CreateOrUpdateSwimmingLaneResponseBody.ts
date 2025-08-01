// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneResponseBodyDataEntryRulesRestItems extends $dara.Model {
  cond?: string;
  datum?: string;
  divisor?: number;
  name?: string;
  nameList?: string[];
  operator?: string;
  rate?: number;
  remainder?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      datum: 'datum',
      divisor: 'divisor',
      name: 'name',
      nameList: 'nameList',
      operator: 'operator',
      rate: 'rate',
      remainder: 'remainder',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      datum: 'string',
      divisor: 'number',
      name: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      operator: 'string',
      rate: 'number',
      remainder: 'number',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneResponseBodyDataEntryRules extends $dara.Model {
  condition?: string;
  path?: string;
  paths?: string[];
  restItems?: CreateOrUpdateSwimmingLaneResponseBodyDataEntryRulesRestItems[];
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      path: 'path',
      paths: 'paths',
      restItems: 'restItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      restItems: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneResponseBodyDataEntryRulesRestItems },
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.restItems)) {
      $dara.Model.validateArray(this.restItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneResponseBodyData extends $dara.Model {
  enable?: boolean;
  enableRules?: boolean;
  entryRule?: string;
  entryRules?: CreateOrUpdateSwimmingLaneResponseBodyDataEntryRules[];
  gatewaySwimmingLaneRouteJson?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groupId?: number;
  id?: number;
  name?: string;
  pathIndependentPercentageEnable?: boolean;
  regionId?: string;
  status?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      enableRules: 'enableRules',
      entryRule: 'entryRule',
      entryRules: 'entryRules',
      gatewaySwimmingLaneRouteJson: 'gatewaySwimmingLaneRouteJson',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupId: 'groupId',
      id: 'id',
      name: 'name',
      pathIndependentPercentageEnable: 'pathIndependentPercentageEnable',
      regionId: 'regionId',
      status: 'status',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      enableRules: 'boolean',
      entryRule: 'string',
      entryRules: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneResponseBodyDataEntryRules },
      gatewaySwimmingLaneRouteJson: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'number',
      id: 'number',
      name: 'string',
      pathIndependentPercentageEnable: 'boolean',
      regionId: 'string',
      status: 'number',
      tag: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entryRules)) {
      $dara.Model.validateArray(this.entryRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The value 200 is returned if the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the data.
   * 
   * @example
   * {}
   */
  data?: CreateOrUpdateSwimmingLaneResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE5C32A1-BC0E-4B79-817C-103E4EDF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateOrUpdateSwimmingLaneResponseBodyData,
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

