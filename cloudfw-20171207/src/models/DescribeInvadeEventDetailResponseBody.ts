// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventDetailResponseBodyOperationList extends $dara.Model {
  /**
   * @remarks
   * The parameters for the operation.
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
   * The parameters for the operation.
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
   * The instance ID of the asset.
   * 
   * @example
   * i-8vb2nmm070m****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * ECS_test
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * test
   */
  eventDesc?: string;
  /**
   * @remarks
   * The details of the event.
   * 
   * @example
   * test
   */
  eventDetail?: string;
  /**
   * @remarks
   * The key of the event.
   * 
   * @example
   * C&CActivity
   */
  eventKey?: string;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * event_test
   */
  eventName?: string;
  /**
   * @remarks
   * The UUID of the threat detection event.
   * 
   * @example
   * aa6e786c-5034-457a-8e05-1c63fab****
   */
  eventUuid?: string;
  /**
   * @remarks
   * The time when the event first occurred. This value is a UNIX timestamp. Unit: seconds.
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
   * The time when the event last occurred. This value is a UNIX timestamp. Unit: seconds.
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
   * The handling status of the event.
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
   * The risk level of the event.
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

