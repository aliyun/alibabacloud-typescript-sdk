// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceEndpointsRequest extends $dara.Model {
  /**
   * @example
   * MATRIX
   */
  component?: string;
  /**
   * @example
   * CUSTOM
   */
  domainType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agentteams-cn-xxxx
   */
  instanceId?: string;
  maxResults?: number;
  /**
   * @example
   * INTERNET
   */
  networkType?: string;
  nextToken?: string;
  /**
   * @example
   * matrix-service
   */
  resourceName?: string;
  skip?: string;
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
      domainType: 'DomainType',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      networkType: 'NetworkType',
      nextToken: 'NextToken',
      resourceName: 'ResourceName',
      skip: 'Skip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: 'string',
      domainType: 'string',
      instanceId: 'string',
      maxResults: 'number',
      networkType: 'string',
      nextToken: 'string',
      resourceName: 'string',
      skip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

