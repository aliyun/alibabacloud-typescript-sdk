// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelTokenRateLimitResponseBodyDataConsumers extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer.
   * 
   * @example
   * cs-example01
   */
  consumerId?: string;
  /**
   * @remarks
   * The maximum number of tokens per minute (TPM) allowed for this consumer to use this model.
   * 
   * @example
   * 300
   */
  tpm?: number;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      tpm: 'tpm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      tpm: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelTokenRateLimitResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The version of the configuration that was last successfully delivered to the control plane.
   * 
   * @example
   * 1
   */
  appliedRevision?: number;
  /**
   * @remarks
   * The mapping from consumer IDs to model throttling rule IDs.
   * 
   * @example
   * {"cs-example01":"model-tpm/gw-example01/msc-example01/consumer/cs-example01"}
   */
  consumerRuleIds?: { [key: string]: string };
  /**
   * @remarks
   * The list of configured consumer quotas for this model.
   * 
   * @example
   * [{"consumerId":"cs-example01","tpm":300}]
   */
  consumers?: GetModelTokenRateLimitResponseBodyDataConsumers[];
  /**
   * @remarks
   * The instance ID of the dedicated AI gateway.
   * 
   * @example
   * gw-example01
   */
  gatewayId?: string;
  /**
   * @remarks
   * The rule ID for the global model quota, which can be matched with the rule hits in the gateway throttling logs. This field is returned only when a global quota is configured.
   * 
   * @example
   * model-tpm/gw-example01/msc-example01/global
   */
  globalRuleId?: string;
  /**
   * @remarks
   * The maximum number of tokens per minute (TPM) shared by all consumers for this model within the instance.
   * 
   * @example
   * 1800
   */
  globalTpm?: number;
  /**
   * @remarks
   * The physical model card ID that starts with msc- or the logical model ID that starts with vm-.
   * 
   * @example
   * msc-example01
   */
  modelId?: string;
  /**
   * @remarks
   * The saved version of the model throttling configuration. Pass this value as expectedRevision in subsequent modification requests.
   * 
   * @example
   * 1
   */
  revision?: number;
  static names(): { [key: string]: string } {
    return {
      appliedRevision: 'appliedRevision',
      consumerRuleIds: 'consumerRuleIds',
      consumers: 'consumers',
      gatewayId: 'gatewayId',
      globalRuleId: 'globalRuleId',
      globalTpm: 'globalTpm',
      modelId: 'modelId',
      revision: 'revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedRevision: 'number',
      consumerRuleIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      consumers: { 'type': 'array', 'itemType': GetModelTokenRateLimitResponseBodyDataConsumers },
      gatewayId: 'string',
      globalRuleId: 'string',
      globalTpm: 'number',
      modelId: 'string',
      revision: 'number',
    };
  }

  validate() {
    if(this.consumerRuleIds) {
      $dara.Model.validateMap(this.consumerRuleIds);
    }
    if(Array.isArray(this.consumers)) {
      $dara.Model.validateArray(this.consumers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelTokenRateLimitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code of the request. The value is Ok if the request is successful.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The saved quotas, versions, and rule IDs for the current model.
   * 
   * @example
   * {"gatewayId":"gw-example01","modelId":"msc-example01","revision":1,"appliedRevision":1,"globalTpm":1800,"consumers":[{"consumerId":"cs-example01","tpm":300}],"globalRuleId":"model-tpm/gw-example01/msc-example01/global","consumerRuleIds":{"cs-example01":"model-tpm/gw-example01/msc-example01/consumer/cs-example01"}}
   */
  data?: GetModelTokenRateLimitResponseBodyData;
  /**
   * @remarks
   * The cause of the error. This field can be omitted if the request is successful.
   * 
   * @example
   * The specified gateway does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used for troubleshooting.
   * 
   * @example
   * 7A35E9B2-4C16-4E90-8A71-24F3BB508C01
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetModelTokenRateLimitResponseBodyData,
      message: 'string',
      requestId: 'string',
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

