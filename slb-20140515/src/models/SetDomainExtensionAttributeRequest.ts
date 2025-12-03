// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDomainExtensionAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name that is associated with the additional certificate to be replaced.
   * 
   * This parameter is required.
   * 
   * @example
   * de-bp1rp7ta*****
   */
  domainExtensionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the new certificate.
   * 
   * @example
   * 1231579xxxxxxxx_166f8204689_1714763408_709981xxx
   */
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverCertificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

