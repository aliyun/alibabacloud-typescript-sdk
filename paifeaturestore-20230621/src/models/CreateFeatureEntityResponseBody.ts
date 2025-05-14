// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFeatureEntityResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  featureEntityId?: string;
  /**
   * @example
   * 0C89F5E1-7F24-5EEC-9F05-508A39278CC8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureEntityId: 'FeatureEntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntityId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

