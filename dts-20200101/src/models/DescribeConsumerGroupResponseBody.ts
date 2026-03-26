// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel extends $dara.Model {
  consumerGroupID?: string;
  consumerGroupName?: string;
  consumerGroupUserName?: string;
  consumptionCheckpoint?: string;
  messageDelay?: number;
  unconsumedData?: number;
  static names(): { [key: string]: string } {
    return {
      consumerGroupID: 'ConsumerGroupID',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupUserName: 'ConsumerGroupUserName',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      messageDelay: 'MessageDelay',
      unconsumedData: 'UnconsumedData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupID: 'string',
      consumerGroupName: 'string',
      consumerGroupUserName: 'string',
      consumptionCheckpoint: 'string',
      messageDelay: 'number',
      unconsumedData: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupResponseBodyConsumerChannels extends $dara.Model {
  describeConsumerChannel?: DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel[];
  static names(): { [key: string]: string } {
    return {
      describeConsumerChannel: 'DescribeConsumerChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeConsumerChannel: { 'type': 'array', 'itemType': DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel },
    };
  }

  validate() {
    if(Array.isArray(this.describeConsumerChannel)) {
      $dara.Model.validateArray(this.describeConsumerChannel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupResponseBody extends $dara.Model {
  consumerChannels?: DescribeConsumerGroupResponseBodyConsumerChannels;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of consumer groups that can be displayed on one page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4204E899-8193-4D7D-A4FB-3A7F9063****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of consumer groups.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      consumerChannels: 'ConsumerChannels',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerChannels: DescribeConsumerGroupResponseBodyConsumerChannels,
      errCode: 'string',
      errMessage: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.consumerChannels && typeof (this.consumerChannels as any).validate === 'function') {
      (this.consumerChannels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

