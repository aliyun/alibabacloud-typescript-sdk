// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageTransformResponseBody extends $dara.Model {
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
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

