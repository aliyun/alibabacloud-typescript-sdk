// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneFeatureConsistencyCheckJobConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the new feature consistency check job configuration.
   * 
   * @example
   * 4
   */
  featureConsistencyCheckId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckId: 'FeatureConsistencyCheckId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckId: 'string',
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

