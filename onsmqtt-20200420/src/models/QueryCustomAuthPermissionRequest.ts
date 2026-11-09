// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomAuthPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The username or client ID.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * AAAAAThmKW2HkRgzo4G7IRRTK2fC6zZmAk6y0bwoNPFOOcSP
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of queries to be returned. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The topic whose authorization information you want to query. Multi-level topics and wildcard characters are supported.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'Identity',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      size: 'Size',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: 'string',
      identityType: 'string',
      instanceId: 'string',
      nextToken: 'string',
      size: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

