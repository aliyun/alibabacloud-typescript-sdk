// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeOrderShrinkRequest extends $dara.Model {
  /**
   * @example
   * https://example.com/callback
   */
  callbackUrl?: string;
  candidateItemsShrink?: string;
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
  videoUrlsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      candidateItemsShrink: 'CandidateItems',
      deviceId: 'DeviceId',
      orderUniqueId: 'OrderUniqueId',
      videoUrlsShrink: 'VideoUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      candidateItemsShrink: 'string',
      deviceId: 'string',
      orderUniqueId: 'string',
      videoUrlsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

