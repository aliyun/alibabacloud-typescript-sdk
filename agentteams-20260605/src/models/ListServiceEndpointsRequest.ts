// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint component. Valid values: ELEMENT, MATRIX, WORKER, and TUNNEL.
   * 
   * @example
   * MATRIX
   */
  component?: string;
  /**
   * @remarks
   * The domain name type. Valid values: BUILTIN and CUSTOM.
   * 
   * @example
   * CUSTOM
   */
  domainType?: string;
  /**
   * @remarks
   * The AgentTeams instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agentteams-cn-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The network type. Valid values: INTRANET and INTERNET.
   * 
   * @example
   * INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of data.
   * 
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * The service name. Exact match is used.
   * 
   * @example
   * matrix-service
   */
  resourceName?: string;
  /**
   * @remarks
   * The number of records to skip.
   * 
   * @example
   * 0
   */
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

