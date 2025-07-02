// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpamResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the default resource discovery association.
   * 
   * @example
   * ipam-res-disco-assoc-jt5fac8twugdbbgip****
   */
  defaultResourceDiscoveryAssociationId?: string;
  /**
   * @remarks
   * The ID of the default resource discovery instance.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  defaultResourceDiscoveryId?: string;
  /**
   * @remarks
   * The ID of the IPAM.
   * 
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  /**
   * @remarks
   * The default private scope created by the system after the IPAM is created.
   * 
   * @example
   * ipam-scope-8wiontzmiy6cg0****
   */
  privateDefaultScopeId?: string;
  /**
   * @remarks
   * The default public scope created by the system after the IPAM is created.
   * 
   * @example
   * ipam-scope-r5c5c7bmym1brc****
   */
  publicDefaultScopeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED39DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of discovered resources.
   * 
   * @example
   * 1
   */
  resourceDiscoveryAssociationCount?: number;
  static names(): { [key: string]: string } {
    return {
      defaultResourceDiscoveryAssociationId: 'DefaultResourceDiscoveryAssociationId',
      defaultResourceDiscoveryId: 'DefaultResourceDiscoveryId',
      ipamId: 'IpamId',
      privateDefaultScopeId: 'PrivateDefaultScopeId',
      publicDefaultScopeId: 'PublicDefaultScopeId',
      requestId: 'RequestId',
      resourceDiscoveryAssociationCount: 'ResourceDiscoveryAssociationCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResourceDiscoveryAssociationId: 'string',
      defaultResourceDiscoveryId: 'string',
      ipamId: 'string',
      privateDefaultScopeId: 'string',
      publicDefaultScopeId: 'string',
      requestId: 'string',
      resourceDiscoveryAssociationCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

