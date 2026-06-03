// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEnterpriseInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  businessLicenseAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  businessLicensePicture?: string;
  enterpriseId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  enterpriseName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  legalPersonCertNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  legalPersonCertPicture?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  legalPersonName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  managerCertNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  managerCertPicture?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  managerContactNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  managerName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  numberApplicationLetterPicture?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  organizationCode?: string;
  ownerId?: number;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  undertakingPicture?: string;
  static names(): { [key: string]: string } {
    return {
      businessLicenseAddress: 'BusinessLicenseAddress',
      businessLicensePicture: 'BusinessLicensePicture',
      enterpriseId: 'EnterpriseId',
      enterpriseName: 'EnterpriseName',
      legalPersonCertNumber: 'LegalPersonCertNumber',
      legalPersonCertPicture: 'LegalPersonCertPicture',
      legalPersonName: 'LegalPersonName',
      managerCertNumber: 'ManagerCertNumber',
      managerCertPicture: 'ManagerCertPicture',
      managerContactNumber: 'ManagerContactNumber',
      managerName: 'ManagerName',
      numberApplicationLetterPicture: 'NumberApplicationLetterPicture',
      organizationCode: 'OrganizationCode',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      undertakingPicture: 'UndertakingPicture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessLicenseAddress: 'string',
      businessLicensePicture: 'string',
      enterpriseId: 'number',
      enterpriseName: 'string',
      legalPersonCertNumber: 'string',
      legalPersonCertPicture: 'string',
      legalPersonName: 'string',
      managerCertNumber: 'string',
      managerCertPicture: 'string',
      managerContactNumber: 'string',
      managerName: 'string',
      numberApplicationLetterPicture: 'string',
      organizationCode: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      undertakingPicture: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

