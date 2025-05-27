// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventSourceRequestSourceMNSParameters extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Base64 decoding is enabled. By default, Base64 decoding is enabled.
   * 
   * @example
   * true
   */
  isBase64Decode?: boolean;
  /**
   * @remarks
   * The name of the MNS queue.
   * 
   * @example
   * queue_api_bind_1672194645178
   */
  queueName?: string;
  /**
   * @remarks
   * The region where the MNS queue resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      isBase64Decode: 'IsBase64Decode',
      queueName: 'QueueName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBase64Decode: 'boolean',
      queueName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

