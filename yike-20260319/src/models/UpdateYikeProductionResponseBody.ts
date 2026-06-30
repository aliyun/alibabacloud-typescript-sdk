// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateYikeProductionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_12334**
   */
  productionId?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productionId: 'ProductionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productionId: 'string',
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

