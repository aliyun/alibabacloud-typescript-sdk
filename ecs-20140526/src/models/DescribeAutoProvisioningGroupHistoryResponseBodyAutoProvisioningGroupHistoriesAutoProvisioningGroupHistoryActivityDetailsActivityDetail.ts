// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetail extends $dara.Model {
  /**
   * @remarks
   * The execution details of instance creation performed by the single scheduling task.
   * 
   * @example
   * New ECS instances "i-bp67acfmxazb4p****, i-bp67acfmxazb5p****" created.
   */
  detail?: string;
  /**
   * @remarks
   * The execution status of instance creation performed by the single scheduling task. Valid values:
   * 
   * *   Successful: Instances are created.
   * *   Failed: Instances failed to be created.
   * *   InProgress: Instances are being created.
   * *   Warning: Some instances are created.
   * 
   * @example
   * Successful
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

