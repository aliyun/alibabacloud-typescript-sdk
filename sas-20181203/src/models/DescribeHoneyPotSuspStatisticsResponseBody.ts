// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHoneyPotSuspStatisticsResponseBodySuspHoneyPotStatisticsResponse extends $dara.Model {
  /**
   * @remarks
   * The total number of alerts that are generated for the asset.
   * 
   * @example
   * 8793
   */
  count?: number;
  /**
   * @remarks
   * The ID of the server.
   * 
   * > This parameter is returned only when **StatisticsKeyType** is set to **uuid**.
   * 
   * @example
   * i-p0whhoba24wd28p8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * > This parameter is returned only when **StatisticsKeyType** is set to **uuid**.
   * 
   * @example
   * abc-launch-advisor
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **vpcInstanceId**: VPC
   * *   **uuid**: server
   * 
   * @example
   * vpcInstanceId
   */
  type?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * > This parameter is returned only when **StatisticsKeyType** is set to **vpcInstanceId**.
   * 
   * @example
   * vpc-p0wwdsuutdyu1ygkt****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * > This parameter is returned only when **StatisticsKeyType** is set to **vpcInstanceId**.
   * 
   * @example
   * abc01
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      type: 'Type',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceId: 'string',
      instanceName: 'string',
      type: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHoneyPotSuspStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9E3969FA-5ACC-4256-9FDE-BB6918CD0410
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the top 5 VPCs or assets for which alerts are most frequently generated.
   */
  suspHoneyPotStatisticsResponse?: DescribeHoneyPotSuspStatisticsResponseBodySuspHoneyPotStatisticsResponse[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suspHoneyPotStatisticsResponse: 'SuspHoneyPotStatisticsResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suspHoneyPotStatisticsResponse: { 'type': 'array', 'itemType': DescribeHoneyPotSuspStatisticsResponseBodySuspHoneyPotStatisticsResponse },
    };
  }

  validate() {
    if(Array.isArray(this.suspHoneyPotStatisticsResponse)) {
      $dara.Model.validateArray(this.suspHoneyPotStatisticsResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

