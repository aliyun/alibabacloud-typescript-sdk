// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of container images in your assets. Only container images in Enterprise instances of Container Registry are counted.
   * 
   * @example
   * 5
   */
  instanceCount?: number;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of container images that have security risks in your assets. Only container images in Enterprise instances of Container Registry are counted.
   * 
   * @example
   * 2
   */
  riskInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      requestId: 'RequestId',
      riskInstanceCount: 'RiskInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      requestId: 'string',
      riskInstanceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

