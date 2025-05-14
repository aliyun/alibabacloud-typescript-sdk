// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelFeatureResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  modelFeatureId?: string;
  /**
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelFeatureId: 'ModelFeatureId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelFeatureId: 'string',
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

