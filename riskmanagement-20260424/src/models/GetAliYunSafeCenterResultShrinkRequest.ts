// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAliYunSafeCenterResultShrinkRequest extends $dara.Model {
  createSimilarSecurityEventsQueryTaskRequestShrink?: string;
  describeInstancesFullStatusRequestShrink?: string;
  describeSecurityEventOperationStatusRequestShrink?: string;
  describeSimilarSecurityEventsRequestShrink?: string;
  getAssetDetailByUuidRequestShrink?: string;
  handleSecurityEventsRequestShrink?: string;
  handleSimilarSecurityEventsRequestShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  interfaceCode?: string;
  listInstancesRequestShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createSimilarSecurityEventsQueryTaskRequestShrink: 'CreateSimilarSecurityEventsQueryTaskRequest',
      describeInstancesFullStatusRequestShrink: 'DescribeInstancesFullStatusRequest',
      describeSecurityEventOperationStatusRequestShrink: 'DescribeSecurityEventOperationStatusRequest',
      describeSimilarSecurityEventsRequestShrink: 'DescribeSimilarSecurityEventsRequest',
      getAssetDetailByUuidRequestShrink: 'GetAssetDetailByUuidRequest',
      handleSecurityEventsRequestShrink: 'HandleSecurityEventsRequest',
      handleSimilarSecurityEventsRequestShrink: 'HandleSimilarSecurityEventsRequest',
      interfaceCode: 'InterfaceCode',
      listInstancesRequestShrink: 'ListInstancesRequest',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSimilarSecurityEventsQueryTaskRequestShrink: 'string',
      describeInstancesFullStatusRequestShrink: 'string',
      describeSecurityEventOperationStatusRequestShrink: 'string',
      describeSimilarSecurityEventsRequestShrink: 'string',
      getAssetDetailByUuidRequestShrink: 'string',
      handleSecurityEventsRequestShrink: 'string',
      handleSimilarSecurityEventsRequestShrink: 'string',
      interfaceCode: 'string',
      listInstancesRequestShrink: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

