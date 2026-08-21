// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentAuthorizationPrincipal extends $dara.Model {
  /**
   * @remarks
   * The ID of the authorization principal. Specify a consumer ID or consumer group ID based on the value of principalType.
   * 
   * This parameter is required.
   * 
   * @example
   * consumer-1
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the authorization principal. Valid values:
   * 
   * - Consumer: consumer.
   * - ConsumerGroup: consumer group.
   * 
   * This parameter is required.
   * 
   * @example
   * Consumer
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalId: 'principalId',
      principalType: 'principalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalId: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

