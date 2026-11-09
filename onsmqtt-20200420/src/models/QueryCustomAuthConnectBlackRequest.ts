// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomAuthConnectBlackRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client to be queried.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-111****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * xOfRU60sGEwN1OlFBIL8Ew==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of clients to be queried. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
      nextToken: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

