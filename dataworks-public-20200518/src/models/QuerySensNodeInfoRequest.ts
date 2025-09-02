// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySensNodeInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data category. You can call the [QuerySensClassification](https://help.aliyun.com/document_detail/2746850.html) operation or log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Data Security Guard page to obtain the ID.
   * 
   * @example
   * 0ce67949-0810-400f-a24a-cc5ffafe1024
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 1000. The recommended number of entries per page ranges from 10 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the sensitive field. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Data Security Guard page to obtain the name.
   * 
   * @example
   * ID card
   */
  sensitiveName?: string;
  /**
   * @remarks
   * The ID of the data category and data sensitivity level template. You can call the [QueryDefaultTemplate](https://help.aliyun.com/document_detail/2743948.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e1970541-6cf5-4d23-b101-d5b66f6e1024
   */
  templateId?: string;
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, perform the following steps: Log on to the [DataWorks console](https://workbench.data.aliyun.com/console). Find your workspace and go to the DataStudio page. On the DataStudio page, click the logon username in the upper-right corner and click User Info in the Menu section.
   * 
   * This parameter is required.
   * 
   * @example
   * 10241024
   */
  tenantId?: string;
  /**
   * @remarks
   * The status of the sensitive field. Valid values:
   * 
   * *   0: draft
   * *   1: published
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sensitiveName: 'SensitiveName',
      templateId: 'TemplateId',
      tenantId: 'TenantId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sensitiveName: 'string',
      templateId: 'string',
      tenantId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

