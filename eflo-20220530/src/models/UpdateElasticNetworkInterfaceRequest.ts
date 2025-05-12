// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateElasticNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 3fd79d62-ab1d-11ec-9a53-0242ac110004
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * LHICDOSEExternaluserinquiryP
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-wz9fj2s3o21nw2****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      regionId: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

