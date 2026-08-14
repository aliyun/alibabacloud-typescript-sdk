// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The modified subscription objects, in JSON format. For more information about the definition, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * > - The new DbList value overwrites the original DbList value. Make sure that the new DbList value contains all the objects that you want to track. Otherwise, objects may be lost. Modify this parameter with caution.
   * - You can call [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html) to query the original subscription objects.
   * 
   * @example
   * {"dtstest":{"name":"dtstest","all":true}}
   */
  dbList?: string;
  /**
   * @remarks
   * The ID of the change tracking instance. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the instance ID.
   * 
   * @example
   * dtsboss6pn1w******
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the change tracking task. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the task ID.
   * 
   * @example
   * boss6pn1w******
   */
  dtsJobId?: string;
  modifyType?: string;
  /**
   * @remarks
   * The region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  reserved?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether the modified task subscribes to DDL data. Valid values:
   * 
   * - **true**: The task subscribes to DDL data.
   * - **false**: The task does not subscribe to DDL data.
   * 
   * @example
   * true
   */
  subscriptionDataTypeDDL?: boolean;
  /**
   * @remarks
   * Specifies whether the modified task subscribes to DML data. Valid values:
   * - **true**: The task subscribes to DML data.
   * - **false**: The task does not subscribe to DML data.
   * 
   * @example
   * true
   */
  subscriptionDataTypeDML?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      modifyType: 'ModifyType',
      regionId: 'RegionId',
      reserved: 'Reserved',
      resourceGroupId: 'ResourceGroupId',
      subscriptionDataTypeDDL: 'SubscriptionDataTypeDDL',
      subscriptionDataTypeDML: 'SubscriptionDataTypeDML',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      modifyType: 'string',
      regionId: 'string',
      reserved: 'string',
      resourceGroupId: 'string',
      subscriptionDataTypeDDL: 'boolean',
      subscriptionDataTypeDML: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

