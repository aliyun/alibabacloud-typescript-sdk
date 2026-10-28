// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The modified objects for change tracking, in the format of a JSON string. For detailed definitions, see [Description of migration, synchronization, or change tracking objects](https://help.aliyun.com/document_detail/209545.html).
   * > - The original DbList is overwritten by the newly passed DbList. Make sure that the newly passed DbList contains all the objects that you want to track. Otherwise, tracked objects may be lost. Proceed with caution.
   * - To query the original objects for change tracking, call the [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html) operation.
   * 
   * @example
   * {"dtstest":{"name":"dtstest","all":true}}
   */
  dbList?: string;
  /**
   * @remarks
   * The ID of the change tracking instance. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID.
   * 
   * @example
   * dtsboss6pn1w******
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the change tracking task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * @example
   * boss6pn1w******
   */
  dtsJobId?: string;
  modifyType?: string;
  /**
   * @remarks
   * The region where the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Specifies whether the modified task tracks DDL data. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  subscriptionDataTypeDDL?: boolean;
  /**
   * @remarks
   * Specifies whether the modified task tracks DML data. Valid values:
   * - **true**: yes.
   * - **false**: no.
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

