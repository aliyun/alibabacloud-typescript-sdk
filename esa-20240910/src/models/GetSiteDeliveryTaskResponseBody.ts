// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteDeliveryTaskResponseBody extends $dara.Model {
  businessType?: string;
  dataCenter?: string;
  deliveryType?: string;
  discardRate?: number;
  fieldList?: string;
  filterRules?: string;
  filterVer?: string;
  rawRule?: string;
  requestId?: string;
  sinkConfig?: any;
  siteId?: number;
  siteName?: string;
  status?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      discardRate: 'DiscardRate',
      fieldList: 'FieldList',
      filterRules: 'FilterRules',
      filterVer: 'FilterVer',
      rawRule: 'RawRule',
      requestId: 'RequestId',
      sinkConfig: 'SinkConfig',
      siteId: 'SiteId',
      siteName: 'SiteName',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      discardRate: 'number',
      fieldList: 'string',
      filterRules: 'string',
      filterVer: 'string',
      rawRule: 'string',
      requestId: 'string',
      sinkConfig: 'any',
      siteId: 'number',
      siteName: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

