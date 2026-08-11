// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelLimitsResponseBodyLimitsModelLimit extends $dara.Model {
  /**
   * @remarks
   * The maximum concurrency.
   * 
   * @example
   * 10
   */
  asyncUserConcurrencyLimit?: number;
  /**
   * @remarks
   * The queue size.
   * 
   * @example
   * 10
   */
  asyncUserQueueLimit?: number;
  /**
   * @remarks
   * The request throttling value.
   * 
   * @example
   * 10
   */
  requestLimit?: number;
  /**
   * @remarks
   * The time period for request throttling, in seconds.
   * 
   * @example
   * 1
   */
  requestLimitPeriod?: number;
  /**
   * @remarks
   * The usage throttling value.
   * 
   * @example
   * 10
   */
  usageLimit?: number;
  /**
   * @remarks
   * The usage throttling unit.
   * 
   * @example
   * 10
   */
  usageLimitField?: string;
  /**
   * @remarks
   * The time period for usage throttling, in seconds.
   * 
   * @example
   * 1
   */
  usageLimitPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      asyncUserConcurrencyLimit: 'asyncUserConcurrencyLimit',
      asyncUserQueueLimit: 'asyncUserQueueLimit',
      requestLimit: 'requestLimit',
      requestLimitPeriod: 'requestLimitPeriod',
      usageLimit: 'usageLimit',
      usageLimitField: 'usageLimitField',
      usageLimitPeriod: 'usageLimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncUserConcurrencyLimit: 'number',
      asyncUserQueueLimit: 'number',
      requestLimit: 'number',
      requestLimitPeriod: 'number',
      usageLimit: 'number',
      usageLimitField: 'string',
      usageLimitPeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelLimitsResponseBodyLimitsWorkspaceLimit extends $dara.Model {
  /**
   * @remarks
   * The maximum concurrency.
   * 
   * @example
   * 10
   */
  asyncUserConcurrencyLimit?: number;
  /**
   * @remarks
   * The queue size.
   * 
   * @example
   * 10
   */
  asyncUserQueueLimit?: number;
  /**
   * @remarks
   * The request throttling value.
   * 
   * @example
   * 10
   */
  requestLimit?: number;
  /**
   * @remarks
   * The time period for request throttling, in seconds.
   * 
   * @example
   * 1
   */
  requestLimitPeriod?: number;
  /**
   * @remarks
   * The usage throttling value.
   * 
   * @example
   * 10
   */
  usageLimit?: number;
  /**
   * @remarks
   * The usage throttling unit.
   * 
   * @example
   * token
   */
  usageLimitField?: string;
  /**
   * @remarks
   * The time period for usage throttling, in seconds.
   * 
   * @example
   * 1
   */
  usageLimitPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      asyncUserConcurrencyLimit: 'asyncUserConcurrencyLimit',
      asyncUserQueueLimit: 'asyncUserQueueLimit',
      requestLimit: 'requestLimit',
      requestLimitPeriod: 'requestLimitPeriod',
      usageLimit: 'usageLimit',
      usageLimitField: 'usageLimitField',
      usageLimitPeriod: 'usageLimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncUserConcurrencyLimit: 'number',
      asyncUserQueueLimit: 'number',
      requestLimit: 'number',
      requestLimitPeriod: 'number',
      usageLimit: 'number',
      usageLimitField: 'string',
      usageLimitPeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelLimitsResponseBodyLimits extends $dara.Model {
  /**
   * @remarks
   * The model.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The model throttling configuration for the current user account.
   */
  modelLimit?: ListModelLimitsResponseBodyLimitsModelLimit;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-plus
   */
  name?: string;
  /**
   * @remarks
   * The custom model throttling configuration for the current workspace.
   */
  workspaceLimit?: ListModelLimitsResponseBodyLimitsWorkspaceLimit;
  static names(): { [key: string]: string } {
    return {
      model: 'model',
      modelLimit: 'modelLimit',
      name: 'name',
      workspaceLimit: 'workspaceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      modelLimit: ListModelLimitsResponseBodyLimitsModelLimit,
      name: 'string',
      workspaceLimit: ListModelLimitsResponseBodyLimitsWorkspaceLimit,
    };
  }

  validate() {
    if(this.modelLimit && typeof (this.modelLimit as any).validate === 'function') {
      (this.modelLimit as any).validate();
    }
    if(this.workspaceLimit && typeof (this.workspaceLimit as any).validate === 'function') {
      (this.workspaceLimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelLimitsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameter is invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The model throttling information.
   */
  limits?: ListModelLimitsResponseBodyLimits[];
  /**
   * @remarks
   * The maximum number of records returned in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next request.
   * 
   * @example
   * lwytFRtLdNk=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36045E0A-551D-592D-B1BC-4C56596CE59E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorMessage: 'errorMessage',
      httpStatusCode: 'httpStatusCode',
      limits: 'limits',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      limits: { 'type': 'array', 'itemType': ListModelLimitsResponseBodyLimits },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.limits)) {
      $dara.Model.validateArray(this.limits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

