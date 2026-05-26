// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeOrderRequest extends $dara.Model {
  /**
   * @example
   * https://example.com/callback
   */
  callbackUrl?: string;
  candidateItems?: string[];
  /**
   * @example
   * DEVICE_001
   */
  deviceId?: string;
  /**
   * @example
   * ORDER_001
   */
  orderUniqueId?: string;
  /**
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

