// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceMNSParameters extends $dara.Model {
  /**
   * @example
   * true
   */
  isBase64Decode?: boolean;
  /**
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @example
   * cn-shanghai
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

