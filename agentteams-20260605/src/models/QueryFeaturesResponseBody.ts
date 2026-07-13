// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFeaturesResponseBodyDataFeatures extends $dara.Model {
  description?: string;
  displayName?: string;
  featureCode?: string;
  supported?: boolean;
  unsupportedReason?: string;
  unsupportedReasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      featureCode: 'FeatureCode',
      supported: 'Supported',
      unsupportedReason: 'UnsupportedReason',
      unsupportedReasonCode: 'UnsupportedReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      featureCode: 'string',
      supported: 'boolean',
      unsupportedReason: 'string',
      unsupportedReasonCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFeaturesResponseBodyData extends $dara.Model {
  features?: QueryFeaturesResponseBodyDataFeatures[];
  instanceId?: string;
  resourceName?: string;
  targetScope?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      instanceId: 'InstanceId',
      resourceName: 'ResourceName',
      targetScope: 'TargetScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': QueryFeaturesResponseBodyDataFeatures },
      instanceId: 'string',
      resourceName: 'string',
      targetScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFeaturesResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: QueryFeaturesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * xxx
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
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFeaturesResponseBodyData,
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

