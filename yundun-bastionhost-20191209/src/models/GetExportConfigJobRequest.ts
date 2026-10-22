// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExportConfigJobRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the configuration backup export task.
   * > This parameter is the JobId returned after you successfully call the CreateExportConfigJob operation to create a configuration backup export task.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  jobId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

