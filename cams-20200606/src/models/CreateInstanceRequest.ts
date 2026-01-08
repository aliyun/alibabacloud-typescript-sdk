// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VIBER
   */
  channelType?: string;
  /**
   * @example
   * 示例值示例值
   */
  contactMail?: string;
  /**
   * @example
   * 1
   */
  countryId?: string;
  /**
   * @remarks
   * FacebookBmId
   * 
   * @example
   * 393992929
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
   * https://a.com/1.pdf
   */
  isvTerms?: string;
  /**
   * @example
   * 长沙麓谷
   */
  officeAddress?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      contactMail: 'ContactMail',
      countryId: 'CountryId',
      facebookBmId: 'FacebookBmId',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      isConfirmAudit: 'IsConfirmAudit',
      isvTerms: 'IsvTerms',
      officeAddress: 'OfficeAddress',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      contactMail: 'string',
      countryId: 'string',
      facebookBmId: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      isConfirmAudit: 'string',
      isvTerms: 'string',
      officeAddress: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
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

