// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppInstanceProfile extends $dara.Model {
  applicationType?: string;
  applicationTypeText?: string;
  bizId?: string;
  commodityCode?: string;
  customerService?: string;
  deployArea?: string;
  instanceId?: string;
  ordTime?: string;
  orderId?: string;
  payTime?: string;
  seoSite?: string;
  siteVersion?: string;
  siteVersionText?: string;
  source?: string;
  templateEtag?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      applicationTypeText: 'ApplicationTypeText',
      bizId: 'BizId',
      commodityCode: 'CommodityCode',
      customerService: 'CustomerService',
      deployArea: 'DeployArea',
      instanceId: 'InstanceId',
      ordTime: 'OrdTime',
      orderId: 'OrderId',
      payTime: 'PayTime',
      seoSite: 'SeoSite',
      siteVersion: 'SiteVersion',
      siteVersionText: 'SiteVersionText',
      source: 'Source',
      templateEtag: 'TemplateEtag',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      applicationTypeText: 'string',
      bizId: 'string',
      commodityCode: 'string',
      customerService: 'string',
      deployArea: 'string',
      instanceId: 'string',
      ordTime: 'string',
      orderId: 'string',
      payTime: 'string',
      seoSite: 'string',
      siteVersion: 'string',
      siteVersionText: 'string',
      source: 'string',
      templateEtag: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

