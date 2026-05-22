// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteDeliveryTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  businessType?: string;
  dataCenter?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryType?: string;
  discardRate?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  fieldName?: string;
  filterVer?: string;
  httpDeliveryShrink?: string;
  kafkaDeliveryShrink?: string;
  ossDeliveryShrink?: string;
  s3DeliveryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  slsDeliveryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      filterVer: 'FilterVer',
      httpDeliveryShrink: 'HttpDelivery',
      kafkaDeliveryShrink: 'KafkaDelivery',
      ossDeliveryShrink: 'OssDelivery',
      s3DeliveryShrink: 'S3Delivery',
      siteId: 'SiteId',
      slsDeliveryShrink: 'SlsDelivery',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      discardRate: 'number',
      fieldName: 'string',
      filterVer: 'string',
      httpDeliveryShrink: 'string',
      kafkaDeliveryShrink: 'string',
      ossDeliveryShrink: 'string',
      s3DeliveryShrink: 'string',
      siteId: 'number',
      slsDeliveryShrink: 'string',
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

