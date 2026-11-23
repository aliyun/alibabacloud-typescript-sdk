// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRouteMapAssociationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the route map association.
   * 
   * @example
   * ecr-routemap-assoc-qdoeneegffq4yv****
   */
  associationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value from your client and make sure that the value is unique across different requests. The client token supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether this is a dry run on the request. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the request but does not modify EPS resources.
   * 
   * - **false** (default): sends a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 2147483647. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query. Valid values:
   * 
   * - If this is the first query or no next query is to be sent, this parameter is not required.
   * - If a next query is to be sent, set the value to the **NextToken** value returned by the last API call.
   * 
   * @example
   * e0a2dbeb69a8beeeb8194e92b702df3fd3e7bfe6ce7bfc16e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the route map in the Cloud Enterprise Network (CEN).
   * 
   * @example
   * rm-6m58b17417tg5a****
   */
  routeMapId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      routeMapId: 'RouteMapId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      routeMapId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

