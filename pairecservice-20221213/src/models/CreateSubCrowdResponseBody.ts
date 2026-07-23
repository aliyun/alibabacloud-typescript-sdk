// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubCrowdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9763624B-5FBB-5E3A-9193-B1ADB554CEAE
   */
  requestId?: string;
  /**
   * @remarks
   * The sub-crowd ID.
   * 
   * @example
   * 3
   */
  subCrowdId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subCrowdId: 'SubCrowdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subCrowdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

