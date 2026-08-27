// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFeaturesResponseBodyDataFeatures extends $dara.Model {
  /**
   * @remarks
   * The feature description.
   * 
   * @example
   * Supports mounting an OSS bucket to an Agent container.
   */
  description?: string;
  /**
   * @remarks
   * The feature display name.
   * 
   * @example
   * OSS Mount.
   */
  displayName?: string;
  /**
   * @remarks
   * The feature code.
   * 
   * @example
   * OSS_MOUNT
   */
  featureCode?: string;
  /**
   * @remarks
   * Indicates whether the feature is supported.
   * 
   * @example
   * true
   */
  supported?: boolean;
  /**
   * @remarks
   * The detailed reason why the feature is not supported.
   * 
   * @example
   * The current base version does not support this feature.
   */
  unsupportedReason?: string;
  /**
   * @remarks
   * The reason code for why the feature is not supported. Valid values:
   *  * BASE_VERSION_UNSUPPORTED: The base version does not support this feature.
   *  * WORKER_VERSION_UNSUPPORTED: The worker version does not support this feature.
   *  * FEATURE_DISABLED: The feature is disabled.
   *  * FEATURE_DEPRECATED: The feature is deprecated.
   *  * OVERRIDDEN_DENY: The feature is denied by an override.
   *  * CUSTOM_RULE_UNSUPPORTED: A custom rule does not support this feature.
   *  * VERSION_METADATA_MISSING: The version metadata is missing.
   *  * RULE_NOT_MATCHED: No rule is matched.
   * 
   * @example
   * BASE_VERSION_UNSUPPORTED
   */
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
  /**
   * @remarks
   * The list of features.
   * 
   * @example
   * [...]
   */
  features?: QueryFeaturesResponseBodyDataFeatures[];
  /**
   * @remarks
   * The AgentTeams instance ID.
   * 
   * @example
   * at-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The target resource name. Required for `WORKER`, `TEAM`, and `HUMAN`. Not required for `INSTANCE`.
   * 
   * @example
   * null
   */
  resourceName?: string;
  /**
   * @remarks
   * The query target type. Valid values:
   *  * INSTANCE: instance level
   *  * WORKER: worker level
   *  * TEAM: team level
   *  * HUMAN: human level
   * 
   * @example
   * INSTANCE
   */
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
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The queried feature information.
   * 
   * @example
   * {}
   */
  data?: QueryFeaturesResponseBodyData;
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
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx
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

