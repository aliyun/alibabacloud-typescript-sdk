// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTensorboardSharedUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the shareable link. Unit: seconds. Maximum value: 604800.
   * 
   * @example
   * 86400
   */
  expireTimeSeconds?: string;
  static names(): { [key: string]: string } {
    return {
      expireTimeSeconds: 'ExpireTimeSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTimeSeconds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

