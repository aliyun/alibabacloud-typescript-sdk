// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceMNSParameters extends $dara.Model {
  /**
   * @remarks
   * Specify whether to enable Base64 encoding. Default value: true. Valid values: true false
   * 
   * @example
   * true
   */
  isBase64Decode?: boolean;
  /**
   * @remarks
   * The name of the queue of Simple Message Queue (formerly MNS).
   * 
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @remarks
   * The region to which the queue of Simple Message Queue (formerly MNS) belongs.
   * 
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

