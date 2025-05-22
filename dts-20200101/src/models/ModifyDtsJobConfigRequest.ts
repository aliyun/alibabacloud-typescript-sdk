// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobConfigRequest extends $dara.Model {
  /**
   * @remarks
   * DTS job ID, which can be queried by calling [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html).
   * 
   * @example
   * lxsn87r328d****
   */
  dtsJobId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The parameters that you want to modify. Specify a JSON string. For more information, see [Parameters](https://help.aliyun.com/document_detail/2536412.html).
   * 
   * @example
   * [{\\"module\\":\\"07\\",\\"name\\":\\"sink.connection.idle.second\\",\\"value\\":60},{\\"module\\":\\"07\\",\\"name\\":\\"sink.batch.size.maximum\\",\\"value\\":64}]
   */
  parameters?: string;
  /**
   * @remarks
   * The region where the instance is located. For more details, see [List of Supported Regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      ownerId: 'OwnerId',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      ownerId: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

