// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @example
   * 123@alibaba.com
   */
  contactMail?: string;
  /**
   * @example
   * 1
   */
  countryId?: string;
  /**
   * @remarks
   * fb bmId
   * 
   * @example
   * 3939982828
   */
  facebookBmId?: string;
  /**
   * @example
   * ins
   */
  instanceDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 82838838****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * viber_ins
   */
  instanceName?: string;
  /**
   * @example
   * Y
   */
  isConfirmAudit?: string;
  /**
   * @example
   * https://aa.com/a.pdf
   */
  isvTerms?: string;
  /**
   * @example
   * 长沙麓谷
   */
  officeAddress?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      contactMail: 'ContactMail',
      countryId: 'CountryId',
      facebookBmId: 'FacebookBmId',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isConfirmAudit: 'IsConfirmAudit',
      isvTerms: 'IsvTerms',
      officeAddress: 'OfficeAddress',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactMail: 'string',
      countryId: 'string',
      facebookBmId: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isConfirmAudit: 'string',
      isvTerms: 'string',
      officeAddress: 'string',
      ownerId: 'number',
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

