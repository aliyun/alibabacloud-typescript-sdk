// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDemandPlanRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1065737167271819
   */
  accountId?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FY2022
   */
  period?: string;
  source?: string;
  targetCid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * URGENT
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 262940
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      description: 'description',
      name: 'name',
      period: 'period',
      source: 'source',
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
      period: 'string',
      source: 'string',
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

