// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  imageId?: string;
  sessionId?: string;
  shareCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      imageId: 'ImageId',
      sessionId: 'SessionId',
      shareCode: 'ShareCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      imageId: 'string',
      sessionId: 'string',
      shareCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

