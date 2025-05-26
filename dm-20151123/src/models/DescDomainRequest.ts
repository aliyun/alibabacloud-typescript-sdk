// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescDomainRequest extends $dara.Model {
  /**
   * @remarks
   * Domain ID. Can be obtained through QueryDomainByParam.
   * 
   * This parameter is required.
   * 
   * @example
   * 13464
   */
  domainId?: number;
  ownerId?: number;
  /**
   * @remarks
   * Determines whether to perform real-time DNS resolution
   * 
   * @example
   * true
   */
  requireRealTimeDnsRecords?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      ownerId: 'OwnerId',
      requireRealTimeDnsRecords: 'RequireRealTimeDnsRecords',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'number',
      ownerId: 'number',
      requireRealTimeDnsRecords: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

