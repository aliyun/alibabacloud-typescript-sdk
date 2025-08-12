// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventRuleTargetsResponseBodyFailedContactParametersContactParameter extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group.
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The ID of the recipient.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The alert notification methods. Valid values:
   * 
   * 4: Alert notifications are sent by using DingTalk and emails.
   * 
   * @example
   * 3
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      id: 'number',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedContactParameters extends $dara.Model {
  contactParameter?: PutEventRuleTargetsResponseBodyFailedContactParametersContactParameter[];
  static names(): { [key: string]: string } {
    return {
      contactParameter: 'ContactParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameter: { 'type': 'array', 'itemType': PutEventRuleTargetsResponseBodyFailedContactParametersContactParameter },
    };
  }

  validate() {
    if(Array.isArray(this.contactParameter)) {
      $dara.Model.validateArray(this.contactParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedFcParametersFcParameter extends $dara.Model {
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * functionTest1
   */
  functionName?: string;
  /**
   * @remarks
   * The ID of the recipient.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the Function Compute service.
   * 
   * @example
   * serviceTest1
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      id: 'Id',
      region: 'Region',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      id: 'number',
      region: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedFcParameters extends $dara.Model {
  fcParameter?: PutEventRuleTargetsResponseBodyFailedFcParametersFcParameter[];
  static names(): { [key: string]: string } {
    return {
      fcParameter: 'FcParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcParameter: { 'type': 'array', 'itemType': PutEventRuleTargetsResponseBodyFailedFcParametersFcParameter },
    };
  }

  validate() {
    if(Array.isArray(this.fcParameter)) {
      $dara.Model.validateArray(this.fcParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedMnsParametersMnsParameter extends $dara.Model {
  /**
   * @remarks
   * The ID of the recipient.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The name of the MNS queue.
   * 
   * @example
   * testQueue
   */
  queue?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      queue: 'Queue',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      queue: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedMnsParameters extends $dara.Model {
  mnsParameter?: PutEventRuleTargetsResponseBodyFailedMnsParametersMnsParameter[];
  static names(): { [key: string]: string } {
    return {
      mnsParameter: 'MnsParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsParameter: { 'type': 'array', 'itemType': PutEventRuleTargetsResponseBodyFailedMnsParametersMnsParameter },
    };
  }

  validate() {
    if(Array.isArray(this.mnsParameter)) {
      $dara.Model.validateArray(this.mnsParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * This parameter is returned if the specified alert contact groups in the request failed to be created or modified.
   */
  failedContactParameters?: PutEventRuleTargetsResponseBodyFailedContactParameters;
  /**
   * @remarks
   * This parameter is returned if the specified functions in the request failed to be created or modified in Function Compute.
   */
  failedFcParameters?: PutEventRuleTargetsResponseBodyFailedFcParameters;
  /**
   * @remarks
   * This parameter is returned if the specified queues in the request failed to be created or modified in SMQ.
   */
  failedMnsParameters?: PutEventRuleTargetsResponseBodyFailedMnsParameters;
  /**
   * @remarks
   * The number of resources that failed to be created or modified.
   * 
   * @example
   * 2
   */
  failedParameterCount?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 409C64DA-CF14-45DF-B463-471C790DD15A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failedContactParameters: 'FailedContactParameters',
      failedFcParameters: 'FailedFcParameters',
      failedMnsParameters: 'FailedMnsParameters',
      failedParameterCount: 'FailedParameterCount',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failedContactParameters: PutEventRuleTargetsResponseBodyFailedContactParameters,
      failedFcParameters: PutEventRuleTargetsResponseBodyFailedFcParameters,
      failedMnsParameters: PutEventRuleTargetsResponseBodyFailedMnsParameters,
      failedParameterCount: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.failedContactParameters && typeof (this.failedContactParameters as any).validate === 'function') {
      (this.failedContactParameters as any).validate();
    }
    if(this.failedFcParameters && typeof (this.failedFcParameters as any).validate === 'function') {
      (this.failedFcParameters as any).validate();
    }
    if(this.failedMnsParameters && typeof (this.failedMnsParameters as any).validate === 'function') {
      (this.failedMnsParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

