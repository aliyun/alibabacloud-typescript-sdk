// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos } from "./DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos";


export class DescribeVsDomainPvUvDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-11-24T00:00:00Z
   */
  endTime?: string;
  pvUvDataInfos?: DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-12-12T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pvUvDataInfos: 'PvUvDataInfos',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      pvUvDataInfos: DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.pvUvDataInfos && typeof (this.pvUvDataInfos as any).validate === 'function') {
      (this.pvUvDataInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

