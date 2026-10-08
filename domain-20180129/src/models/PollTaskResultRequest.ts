// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PollTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Domain instance ID.
   * 
   * The system automatically generates this after the information template is created successfully. You can invoke the [QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.html) API to query the information template ID.
   * 
   * @example
   * S20181T0WLI85212
   */
  instanceId?: string;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value is **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size. Maximum value is **1000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Job number.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @remarks
   * Task result status. Valid values:
   * - **2**: Succeeded.
   * - **3**: Failed.
   * 
   * @example
   * 2
   */
  taskResultStatus?: number;
  /**
   * @remarks
   * User IP address. It can be set to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      taskNo: 'TaskNo',
      taskResultStatus: 'TaskResultStatus',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      instanceId: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      taskNo: 'string',
      taskResultStatus: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

