// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushTimesUsageRequest extends $dara.Model {
  adjust?: boolean;
  adjustDate?: number;
  /**
   * @remarks
   * The client token used to ensure request idempotence. We recommend that you use a UUID. The same `ClientToken` can be submitted only once within 24 hours. Retries for the same operation must use the same `ClientToken`, and new operations must use a new `ClientToken`.
   * 
   * @example
   * 6dff6c70-3484-4a39-b725-164e3ad9b20d
   */
  clientToken?: string;
  /**
   * @remarks
   * The Alibaba Cloud Marketplace instance ID.
   * 
   * @example
   * 1000001
   */
  instanceId?: string;
  mark?: string;
  /**
   * @remarks
   * The number of uses to deduct. The value must be greater than 0.
   * 
   * @example
   * 10
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      adjust: 'Adjust',
      adjustDate: 'AdjustDate',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      mark: 'Mark',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjust: 'boolean',
      adjustDate: 'number',
      clientToken: 'string',
      instanceId: 'string',
      mark: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

