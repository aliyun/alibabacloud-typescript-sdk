// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFeatureViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The feature view ID.
   * 
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C89F5E1-7F24-5EEC-9F05-508A39278CC8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureViewId: 'FeatureViewId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViewId: 'string',
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

