// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserDeliveryTaskResponseBody extends $dara.Model {
  businessType?: string;
  dataCenter?: string;
  deliveryType?: string;
  details?: string;
  discardRate?: number;
  fieldList?: string;
  filterRules?: string;
  filterVer?: string;
  rawRule?: string;
  requestId?: string;
  sinkConfig?: any;
  status?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      details: 'Details',
      discardRate: 'DiscardRate',
      fieldList: 'FieldList',
      filterRules: 'FilterRules',
      filterVer: 'FilterVer',
      rawRule: 'RawRule',
      requestId: 'RequestId',
      sinkConfig: 'SinkConfig',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      details: 'string',
      discardRate: 'number',
      fieldList: 'string',
      filterRules: 'string',
      filterVer: 'string',
      rawRule: 'string',
      requestId: 'string',
      sinkConfig: 'any',
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

