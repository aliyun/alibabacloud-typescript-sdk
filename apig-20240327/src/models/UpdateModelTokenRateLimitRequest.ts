// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelTokenRateLimitRequestConsumers extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer.
   * 
   * This parameter is required.
   * 
   * @example
   * cs-example01
   */
  consumerId?: string;
  /**
   * @remarks
   * The tokens per minute (TPM) limit for the consumer using this model.
   * 
   * This parameter is required.
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

export class UpdateModelTokenRateLimitRequest extends $dara.Model {
  /**
   * @remarks
   * The complete list of consumer limits. Pass an empty array to clear the consumer limits for the model.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"consumerId":"cs-example01","tpm":300}]
   */
  consumers?: UpdateModelTokenRateLimitRequestConsumers[];
  /**
   * @remarks
   * The revision returned by the last query. Set this parameter to 0 for the first configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  expectedRevision?: number;
  /**
   * @remarks
   * The global tokens per minute (TPM) limit for the model within the instance. If this parameter is omitted, the global limit is disabled.
   * 
   * @example
   * 1800
   */
  globalTpm?: number;
  static names(): { [key: string]: string } {
    return {
      consumers: 'consumers',
      expectedRevision: 'expectedRevision',
      globalTpm: 'globalTpm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumers: { 'type': 'array', 'itemType': UpdateModelTokenRateLimitRequestConsumers },
      expectedRevision: 'number',
      globalTpm: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.consumers)) {
      $dara.Model.validateArray(this.consumers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

