// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDemandPlanV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accountId?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  productType?: string;
  targetCid?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      description: 'description',
      name: 'name',
      productType: 'productType',
      targetCid: 'targetCid',
      type: 'type',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      description: 'string',
      name: 'string',
      productType: 'string',
      targetCid: 'number',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

