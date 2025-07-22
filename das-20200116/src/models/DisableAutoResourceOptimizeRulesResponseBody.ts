// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableAutoResourceOptimizeRulesResponseBodyDataConfigFailInstanceList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the automatic tablespace fragment recycling feature is disabled. Valid values:
   * 
   * * **true**
   * 
   * * **false**
   * 
   * @example
   * false
   */
  configSuccess?: boolean;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * cannot found instance by rm-2ze9xrhze0709****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2ze9xrhze0709****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      errorMessage: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoResourceOptimizeRulesResponseBodyDataConfigSuccessInstanceList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the automatic tablespace fragment recycling feature is disabled. Valid values:
   * 
   * * **true**
   * 
   * * **false**
   * 
   * @example
   * true
   */
  configSuccess?: boolean;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoResourceOptimizeRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of database instances for which the automatic tablespace fragment recycling feature failed to be disabled.
   * 
   * @example
   * 1
   */
  configFailInstanceCount?: number;
  /**
   * @remarks
   * The list of database instances for which the automatic tablespace fragment recycling feature failed to be disabled.
   */
  configFailInstanceList?: DisableAutoResourceOptimizeRulesResponseBodyDataConfigFailInstanceList[];
  /**
   * @remarks
   * The number of database instances for which the automatic tablespace fragment recycling feature is disabled.
   * 
   * @example
   * 1
   */
  configSuccessInstanceCount?: number;
  /**
   * @remarks
   * The list of database instances for which the automatic tablespace fragment recycling feature is disabled.
   */
  configSuccessInstanceList?: DisableAutoResourceOptimizeRulesResponseBodyDataConfigSuccessInstanceList[];
  /**
   * @remarks
   * The total number of database instances.
   * 
   * @example
   * 2
   */
  totalInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      configFailInstanceCount: 'ConfigFailInstanceCount',
      configFailInstanceList: 'ConfigFailInstanceList',
      configSuccessInstanceCount: 'ConfigSuccessInstanceCount',
      configSuccessInstanceList: 'ConfigSuccessInstanceList',
      totalInstanceCount: 'TotalInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFailInstanceCount: 'number',
      configFailInstanceList: { 'type': 'array', 'itemType': DisableAutoResourceOptimizeRulesResponseBodyDataConfigFailInstanceList },
      configSuccessInstanceCount: 'number',
      configSuccessInstanceList: { 'type': 'array', 'itemType': DisableAutoResourceOptimizeRulesResponseBodyDataConfigSuccessInstanceList },
      totalInstanceCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configFailInstanceList)) {
      $dara.Model.validateArray(this.configFailInstanceList);
    }
    if(Array.isArray(this.configSuccessInstanceList)) {
      $dara.Model.validateArray(this.configSuccessInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoResourceOptimizeRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DisableAutoResourceOptimizeRulesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DisableAutoResourceOptimizeRulesResponseBodyData,
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

