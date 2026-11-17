// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventDetailResponseBodyOperationList extends $dara.Model {
  /**
   * @remarks
   * The operation parameters.
   * 
   * @example
   * test
   */
  args?: string;
  /**
   * @remarks
   * The operation.
   * 
   * @example
   * RunMode
   */
  operate?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      operate: 'Operate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      operate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventDetailResponseBodyUnhandleOperationList extends $dara.Model {
  /**
   * @remarks
   * The operation parameters.
   * 
   * @example
   * test
   */
  args?: string;
  /**
   * @remarks
   * The operation.
   * 
   * @example
   * RunMode
   */
  operate?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      operate: 'Operate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      operate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asset instance ID.
   * 
   * @example
   * i-8vb2nmm070m****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The asset name.
   * 
   * @example
   * ECS_test
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * The event description.
   * 
   * @example
   * test
   */
  eventDesc?: string;
  /**
   * @remarks
   * The event details.
   * 
   * @example
   * test
   */
  eventDetail?: string;
  /**
   * @remarks
   * The event key.
   * 
   * @example
   * C&CActivity
   */
  eventKey?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * event_test
   */
  eventName?: string;
  /**
   * @remarks
   * The UUID of the compromise awareness event.
   * 
   * @example
   * aa6e786c-5034-457a-8e05-1c63fab****
   */
  eventUuid?: string;
  /**
   * @remarks
   * The time when the event first occurred. The value is a UNIX timestamp accurate to seconds.
   * 
   * @example
   * 1735006706
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether the event is ignored.
   * 
   * @example
   * false
   */
  isIgnore?: boolean;
  /**
   * @remarks
   * The time when the event last occurred. The value is a UNIX timestamp accurate to seconds.
   * 
   * @example
   * 1740104108
   */
  lastTime?: number;
  /**
   * @remarks
   * The list of remediation operations.
   */
  operationList?: DescribeInvadeEventDetailResponseBodyOperationList[];
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.21.186.XXX
   */
  privateIP?: string;
  /**
   * @remarks
   * The processing status.
   * 
   * @example
   * 1
   */
  processStatus?: number;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 106.15.185.XXX
   */
  publicIP?: string;
  /**
   * @remarks
   * The reference information.
   * 
   * @example
   * test
   */
  reference?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8022D695-4A35-50BC-8697-EA9C233A****
   */
  requestId?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * 2
   */
  riskLevel?: number;
  /**
   * @remarks
   * The list of unhandled operations.
   */
  unhandleOperationList?: DescribeInvadeEventDetailResponseBodyUnhandleOperationList[];
  static names(): { [key: string]: string } {
    return {
      assetsInstanceId: 'AssetsInstanceId',
      assetsInstanceName: 'AssetsInstanceName',
      eventDesc: 'EventDesc',
      eventDetail: 'EventDetail',
      eventKey: 'EventKey',
      eventName: 'EventName',
      eventUuid: 'EventUuid',
      firstTime: 'FirstTime',
      isIgnore: 'IsIgnore',
      lastTime: 'LastTime',
      operationList: 'OperationList',
      privateIP: 'PrivateIP',
      processStatus: 'ProcessStatus',
      publicIP: 'PublicIP',
      reference: 'Reference',
      regionNo: 'RegionNo',
      requestId: 'RequestId',
      riskLevel: 'RiskLevel',
      unhandleOperationList: 'UnhandleOperationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsInstanceId: 'string',
      assetsInstanceName: 'string',
      eventDesc: 'string',
      eventDetail: 'string',
      eventKey: 'string',
      eventName: 'string',
      eventUuid: 'string',
      firstTime: 'number',
      isIgnore: 'boolean',
      lastTime: 'number',
      operationList: { 'type': 'array', 'itemType': DescribeInvadeEventDetailResponseBodyOperationList },
      privateIP: 'string',
      processStatus: 'number',
      publicIP: 'string',
      reference: 'string',
      regionNo: 'string',
      requestId: 'string',
      riskLevel: 'number',
      unhandleOperationList: { 'type': 'array', 'itemType': DescribeInvadeEventDetailResponseBodyUnhandleOperationList },
    };
  }

  validate() {
    if(Array.isArray(this.operationList)) {
      $dara.Model.validateArray(this.operationList);
    }
    if(Array.isArray(this.unhandleOperationList)) {
      $dara.Model.validateArray(this.unhandleOperationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

