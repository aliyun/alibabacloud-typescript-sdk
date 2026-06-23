// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExchangesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-7pp2mwbc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: **1 to 100**.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for retrieving the next page of results. Set this parameter to the token value returned from the previous call.
   * 
   * - Omit this parameter on your first call.
   * 
   * - If a subsequent call is required, set this parameter to the `NextToken` value returned from the previous call.
   * 
   * @example
   * AAAANDQBYW1xcC1jbi03cHAybXdiY3AwMGEBdmhvc3QBAXNkZndhYWJhATE2NDkzMTM4OTU5NDIB4o3z1pPwWzk4aYuiRffi8R6-****
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the vhost.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

