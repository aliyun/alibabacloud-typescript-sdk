// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-06-13T15:45:43Z
   */
  endTime?: string;
  /**
   * @remarks
   * 2021-06-13T15:40:43Z
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * {"name":"DescribeTenantMetrics","product":"OceanBasePro","version":"2019-09-01","path":"/","deprecated":0,"method":"POST|GET","protocol":"HTTP|HTTPS","hidden":0,"timeout":10000,"parameter_type":"Single","params":"[{\\"name\\":\\"Action\\",\\"position\\":\\"Query\\",\\"required\\":true,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"description\\":\\"\\",\\"example\\":\\"DescribeTenantMetrics\\"},{\\"name\\":\\"InstanceId\\",\\"position\\":\\"Body\\",\\"required\\":true,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"ob317v4uif****\\"},{\\"name\\":\\"PageSize\\",\\"position\\":\\"Body\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"Integer\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"10\\"},{\\"name\\":\\"PageNumber\\",\\"position\\":\\"Body\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"Integer\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"1\\"},{\\"name\\":\\"TenantName\\",\\"position\\":\\"Body\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":true,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"pay_online\\"},{\\"name\\":\\"StartTime\\",\\"position\\":\\"Body\\",\\"required\\":true,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"2021-06-13T15:40:43Z\\"},{\\"name\\":\\"EndTime\\",\\"position\\":\\"Body\\",\\"required\\":true,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"2021-06-13T15:45:43Z\\"},{\\"name\\":\\"Metrics\\",\\"position\\":\\"Body\\",\\"required\\":true,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"tps\\"},{\\"name\\":\\"TenantId\\",\\"position\\":\\"Body\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":true,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"tfafd34fs****\\"},{\\"name\\":\\"TenantIdList\\",\\"position\\":\\"Body\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"[tdak3nac****,tdakc42df****]\\"}]","response_headers":"[]","response":"{\\"type\\":\\"Object\\",\\"children\\":[{\\"name\\":\\"TotalCount\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"Integer\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"9\\"},{\\"name\\":\\"RequestId\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C\\"},{\\"name\\":\\"TenantMetrics\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"\\\\\\"Metrics\\\\\\":[ {\\\\\\"request_queue_rt\\\\\\":0.0,\\\\\\"TimeStamp\\\\\\":\\\\\\"2022-02-23T01:58:00Z\\\\\\"}]\\"}],\\"title\\":\\"\\",\\"description\\":\\"\\"}","errors":"{}"}
   * 
   * This parameter is required.
   * 
   * @example
   * tps
   */
  metrics?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * tfafd34fs****
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Example 1
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-13T15:40:43Z
   */
  startTime?: string;
  /**
   * @example
   * tfafd34fs****
   * 
   * @deprecated
   */
  tenantId?: string;
  /**
   * @example
   * [tdak3nac****,tdakc42df****]
   */
  tenantIdList?: string;
  /**
   * @remarks
   * 2021-06-13T15:45:43Z
   * 
   * @example
   * pay_online
   * 
   * @deprecated
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metrics: 'Metrics',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tenantId: 'TenantId',
      tenantIdList: 'TenantIdList',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      metrics: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      tenantId: 'string',
      tenantIdList: 'string',
      tenantName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

