// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeAICInstanceImageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AIC image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-****
   */
  imageId?: string;
  /**
   * @remarks
   * The IDs of the servers.
   * 
   * This parameter is required.
   */
  serverIds?: string[];
  /**
   * @remarks
   * The timeout period of the update. Unit: seconds.
   * 
   * @example
   * 1800
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      serverIds: 'ServerIds',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      serverIds: { 'type': 'array', 'itemType': 'string' },
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serverIds)) {
      $dara.Model.validateArray(this.serverIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

