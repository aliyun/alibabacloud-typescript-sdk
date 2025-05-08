// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayAuthConsumerResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The status of the consumer. Valid values:
   * 
   * *   true: enabled
   * *   false: disabled
   * 
   * @example
   * true
   */
  consumerStatus?: boolean;
  /**
   * @remarks
   * The description of the consumer.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-09-13 19:24:23
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the consumer.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the consumer.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 123
   */
  primaryUser?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   JWT
   * 
   * @example
   * JWT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      consumerStatus: 'ConsumerStatus',
      description: 'Description',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      primaryUser: 'PrimaryUser',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerStatus: 'boolean',
      description: 'string',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      primaryUser: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

