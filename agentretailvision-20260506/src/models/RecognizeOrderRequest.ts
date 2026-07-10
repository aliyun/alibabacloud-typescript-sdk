// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeOrderRequest extends $dara.Model {
  /**
   * @remarks
   * Callback URL for this task. If not provided, the registered default address is used.
   * 
   * @example
   * https://example.com/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * List of candidate items. It is recommended to pass platform_item_id.
   */
  candidateItems?: string[];
  /**
   * @remarks
   * Device ID
   * 
   * @example
   * DEVICE_001
   */
  deviceId?: string;
  /**
   * @remarks
   * Unique idempotent ID of the business party, unique within the same business party
   * 
   * @example
   * ORDER_001
   */
  orderUniqueId?: string;
  /**
   * @remarks
   * List of shopping video OSS addresses (currently only one is supported)
   * 
   * @example
   * ["https://oss.example.com/video1.mp4"]
   */
  videoUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      candidateItems: 'CandidateItems',
      deviceId: 'DeviceId',
      orderUniqueId: 'OrderUniqueId',
      videoUrls: 'VideoUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      candidateItems: { 'type': 'array', 'itemType': 'string' },
      deviceId: 'string',
      orderUniqueId: 'string',
      videoUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.candidateItems)) {
      $dara.Model.validateArray(this.candidateItems);
    }
    if(Array.isArray(this.videoUrls)) {
      $dara.Model.validateArray(this.videoUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

