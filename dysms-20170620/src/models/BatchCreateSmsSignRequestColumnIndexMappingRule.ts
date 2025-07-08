// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchCreateSmsSignRequestColumnIndexMappingRule extends $dara.Model {
  adminIdentifiedNumber?: number;
  adminName?: number;
  companyName?: number;
  legalPersonIdentifiedNumber?: number;
  legalPersonName?: number;
  organizationCode?: number;
  remark?: number;
  sceneDescription?: number;
  signatureName?: number;
  signatureSource?: number;
  templateContent?: number;
  static names(): { [key: string]: string } {
    return {
      adminIdentifiedNumber: 'AdminIdentifiedNumber',
      adminName: 'AdminName',
      companyName: 'CompanyName',
      legalPersonIdentifiedNumber: 'LegalPersonIdentifiedNumber',
      legalPersonName: 'LegalPersonName',
      organizationCode: 'OrganizationCode',
      remark: 'Remark',
      sceneDescription: 'SceneDescription',
      signatureName: 'SignatureName',
      signatureSource: 'SignatureSource',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminIdentifiedNumber: 'number',
      adminName: 'number',
      companyName: 'number',
      legalPersonIdentifiedNumber: 'number',
      legalPersonName: 'number',
      organizationCode: 'number',
      remark: 'number',
      sceneDescription: 'number',
      signatureName: 'number',
      signatureSource: 'number',
      templateContent: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

