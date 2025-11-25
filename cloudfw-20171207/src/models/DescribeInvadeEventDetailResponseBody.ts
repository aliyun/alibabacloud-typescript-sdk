// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventDetailResponseBodyOperationList extends $dara.Model {
  /**
   * @example
   * test
   */
  args?: string;
  /**
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
   * @example
   * test
   */
  args?: string;
  /**
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
   * @example
   * i-8vb2nmm070m****
   */
  assetsInstanceId?: string;
  /**
   * @example
   * ECS_test
   */
  assetsInstanceName?: string;
  /**
   * @example
   * test
   */
  eventDesc?: string;
  /**
   * @example
   * test
   */
  eventDetail?: string;
  /**
   * @example
   * C&CActivity
   */
  eventKey?: string;
  /**
   * @example
   * event_test
   */
  eventName?: string;
  /**
   * @example
   * aa6e786c-5034-457a-8e05-1c63fab****
   */
  eventUuid?: string;
  /**
   * @example
   * 1735006706
   */
  firstTime?: number;
  /**
   * @example
   * false
   */
  isIgnore?: boolean;
  /**
   * @example
   * 1740104108
   */
  lastTime?: number;
  operationList?: DescribeInvadeEventDetailResponseBodyOperationList[];
  /**
   * @example
   * 10.21.186.XXX
   */
  privateIP?: string;
  /**
   * @example
   * 1
   */
  processStatus?: number;
  /**
   * @example
   * 106.15.185.XXX
   */
  publicIP?: string;
  /**
   * @example
   * test
   */
  reference?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @example
   * 8022D695-4A35-50BC-8697-EA9C233A****
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  riskLevel?: number;
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

