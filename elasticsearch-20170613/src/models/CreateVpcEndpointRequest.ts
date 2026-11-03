// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must ensure that it is unique among different requests. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the endpoint service that you created. The endpoint on the service VPC side is associated with this service ID.
   * 
   * @example
   * epsrv-hp3xdsq46ael67lo****
   */
  serviceId?: string;
  /**
   * @remarks
   * The zone ID of the endpoint service that you created.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  /**
   * @remarks
   * Specifies whether to only perform a dry run on the request. Valid values:
   * 
   * - true: sends a check request and does not create an endpoint node. The check items include whether the AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified.
   * - false (default): immediately triggers the creation of an endpoint node.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serviceId: 'serviceId',
      zoneId: 'zoneId',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceId: 'string',
      zoneId: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

