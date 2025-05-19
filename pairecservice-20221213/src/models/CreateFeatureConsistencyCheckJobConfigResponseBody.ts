// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFeatureConsistencyCheckJobConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 4
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @example
   * E15A1443-7917-5BE0-AE70-25538ECF398D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckJobConfigId: 'string',
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

