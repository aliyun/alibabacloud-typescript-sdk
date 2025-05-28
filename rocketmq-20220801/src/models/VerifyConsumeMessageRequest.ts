// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyConsumeMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * zeekr-settlement-server-dc555456f-v2lcg@1@1@qfvorazqns
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * This parameter is required.
   * 
   * @example
   * TEST_FINANCE_STOCK_OUT_GROUP
   */
  consumerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      consumerGroupId: 'consumerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      consumerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

