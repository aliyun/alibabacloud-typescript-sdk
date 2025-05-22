// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgress } from "./DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgress";


export class DescribePreCheckStatusResponseBodyFullNetCheckJobStatus extends $dara.Model {
  /**
   * @remarks
   * Task code, **01** represents pre-check.
   * 
   * @example
   * 01
   */
  code?: string;
  /**
   * @remarks
   * ID of the region to which the target network segment belongs.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * Destination network segment.
   * 
   * @example
   * 100.104.XX.XXX/XX
   */
  destRegionCidr?: string;
  /**
   * @remarks
   * The access method of the target instance, with return values as follows: - **ALIYUN**: Access method is **cloud instance**. - **OTHER**: Access method is **public IP**. - **ECS**: Access method is **ECS self-built database**. - **EXPRESS**: Access method is **Express Connect / VPN Gateway / Smart Gateway**. - **CEN**: Access method is **Cloud Enterprise Network (CEN)**. - **DG**: Access method is **Database Gateway (DG)**.
   * 
   * @example
   * CEN
   */
  destinationEndpointType?: string;
  /**
   * @remarks
   * Number of pre-check failed items
   * 
   * @example
   * 0
   */
  errorItem?: number;
  /**
   * @remarks
   * The region ID of the instance\\"s running node.
   * 
   * @example
   * cn-hangzhou
   */
  hostRegion?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * l3m1213ye7l****
   */
  jobId?: string;
  /**
   * @remarks
   * Task name.
   * 
   * @example
   * dts.step.fullnetcheck
   */
  jobName?: string;
  /**
   * @remarks
   * A list of specific items for the task and their execution progress.
   */
  jobProgress?: DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgress[];
  /**
   * @remarks
   * The access method of the source instance, with return values as follows: - **ALIYUN**: Access method is **cloud instance**. - **OTHER**: Access method is **public IP**. - **ECS**: Access method is **ECS self-built database**. - **EXPRESS**: Access method is **dedicated line/VPN gateway/smart gateway**. - **CEN**: Access method is **Cloud Enterprise Network CEN**. - **DG**: Access method is **Database Gateway DG**.
   * 
   * @example
   * CEN
   */
  sourceEndpointType?: string;
  /**
   * @remarks
   * ID of the region to which the source network segment belongs.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * Source network segment.
   * 
   * @example
   * 100.104.XX.XXX/XX
   */
  srcRegionCidr?: string;
  /**
   * @remarks
   * Check result, the return value is: - **Failed**: Failure. - **Success**: Completed.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * Total number of items in the project.
   * 
   * @example
   * 11
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      destRegion: 'DestRegion',
      destRegionCidr: 'DestRegionCidr',
      destinationEndpointType: 'DestinationEndpointType',
      errorItem: 'ErrorItem',
      hostRegion: 'HostRegion',
      jobId: 'JobId',
      jobName: 'JobName',
      jobProgress: 'JobProgress',
      sourceEndpointType: 'SourceEndpointType',
      srcRegion: 'SrcRegion',
      srcRegionCidr: 'SrcRegionCidr',
      state: 'State',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      destRegion: 'string',
      destRegionCidr: 'string',
      destinationEndpointType: 'string',
      errorItem: 'number',
      hostRegion: 'string',
      jobId: 'string',
      jobName: 'string',
      jobProgress: { 'type': 'array', 'itemType': DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgress },
      sourceEndpointType: 'string',
      srcRegion: 'string',
      srcRegionCidr: 'string',
      state: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobProgress)) {
      $dara.Model.validateArray(this.jobProgress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

