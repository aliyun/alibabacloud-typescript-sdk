// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus extends $dara.Model {
  domain?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogDispatchStatusResponseBody extends $dara.Model {
  requestId?: string;
  slsConfigStatus?: DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsConfigStatus: 'SlsConfigStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsConfigStatus: { 'type': 'array', 'itemType': DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slsConfigStatus)) {
      $dara.Model.validateArray(this.slsConfigStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

