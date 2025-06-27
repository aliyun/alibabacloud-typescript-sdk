// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The objects of the change tracking task. The value is a JSON string. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * >  You can call the [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html) operation to query the original objects of the task.
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
   * The ID of the region where the change tracking instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  reserved?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to retrieve data definition language (DDL) statements. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  subscriptionDataTypeDDL?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve data manipulation language (DML) statements. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
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

