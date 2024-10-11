// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelSparkStatementRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202106071620hangzhou****
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026****
   */
  statementId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      statementId: 'StatementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      statementId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSparkStatementResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  data?: string;
  /**
   * @example
   * 341ADFA1-4A68-4707-9CA7-FA86523A5F14
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSparkStatementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelSparkStatementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelSparkStatementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "{\\"operable\\":\\"false\\",\\"max_cu\\":\\"8\\",\\"instance_name\\":\\"api-test-9\\",\\"min_cu\\":\\"0\\",\\"engine\\":\\"spark\\",\\"region\\":\\"cn-hangzhou\\",\\"app_name\\":\\"xx\\",\\"app_version_name\\":\\"xx\\"}"
   */
  component?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CU_PRESTO
   */
  instanceType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      component: 'Component',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      component: 'string',
      instanceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * 600
   */
  errorCode?: string;
  /**
   * @example
   * An internal error occurred
   */
  errorInfo?: string;
  /**
   * @example
   * 312F48C7-AFA0-46AA-B8F6-1B16B8808045
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSparkStatementRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * print(2+2)\\n
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202106071620hangzhou****
   */
  jobId?: string;
  /**
   * @example
   * sql
   */
  kind?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jobId: 'JobId',
      kind: 'Kind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      jobId: 'string',
      kind: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSparkStatementResponseBody extends $tea.Model {
  /**
   * @example
   * 2
   */
  data?: string;
  /**
   * @example
   * 0DC5B6F080E8-0DC5B6F080E8-0DC5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSparkStatementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteSparkStatementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteSparkStatementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobAttemptLogRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202105272322hangzhou5d64f1560000128-0001
   */
  jobAttemptId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202105272322hangzhou5d64f1560000128
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * release-test
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      jobAttemptId: 'JobAttemptId',
      jobId: 'JobId',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobAttemptId: 'string',
      jobId: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobAttemptLogResponseBody extends $tea.Model {
  /**
   * @example
   * local:///opt/spark/jars/offline-sql.jar, main_file\\n+ exec /usr/bin/tini -s -- /jdk/jdk8/bin/java -cp \\"/opt/tools/exec-wrapper.jar:.:::/opt/spark/jars/*\\" com.aliyun.dla.spark.SparkJobWrapper /opt/spark/bin/spark-submit --conf spark.driver.host=172.16.6.205 --conf spark.ui.port=4040 --conf \\"spark.driver.extraJavaOptions=-Dlog4j.configuration=file:///opt/spark/log-conf/log4j.properties -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/dump.hprof -XX:OnOutOfMemoryError=\\"bash /opt/tools/oss-cp.sh /tmp/dump.hprof oss://dla-test-cn-hangzhou/spark-logs/release-test/j202105272322hangzhou5d64f1560000128-0001/driver/dump.hprof; bash /opt/tools/job-stop.sh\\" \\"
   */
  data?: string;
  /**
   * @example
   * 9CE8F271-F918-43B6-8F58-F9F1C2DCFDB8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobAttemptLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobAttemptLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobAttemptLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202010271622hangzhouf742a4330000923
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyCluster
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponseBody extends $tea.Model {
  jobDetail?: GetJobDetailResponseBodyJobDetail;
  /**
   * @example
   * 5F10AB6E-8984-4E32-B821-4E1512711B8C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobDetail: 'JobDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobDetail: GetJobDetailResponseBodyJobDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobLogRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202010271622hangzhouf742a4330000923
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyCluster
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobLogResponseBody extends $tea.Model {
  /**
   * @example
   * INFO SparkContext: Running Spark version 2.x
   */
  data?: string;
  /**
   * @example
   * EC031B4B-3E07-40D2-9BC5-xxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202011031935hangzhouf742a4330003667
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyCluster
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponseBody extends $tea.Model {
  /**
   * @example
   * 5C3F9ADD-2350-4C21-A3A1-A906F8DF8016
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkSessionStateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202104171040zjkb4cc449d0000000
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkSessionStateResponseBody extends $tea.Model {
  /**
   * @example
   * 9AD49396-8F80-5511-9268-A6360B205136
   */
  requestId?: string;
  /**
   * @example
   * killed
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkSessionStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkSessionStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkSessionStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkStatementRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202106071620hangzhou00000000001
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  statementId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      statementId: 'StatementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      statementId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkStatementResponseBody extends $tea.Model {
  data?: GetSparkStatementResponseBodyData;
  /**
   * @example
   * C5DB60E0-6EB3-493C-8956-DA0D3A2EE656
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkStatementResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkStatementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkStatementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkStatementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202011031935hangzhouf742a4330003667
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyCluster
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkJobResponseBody extends $tea.Model {
  /**
   * @example
   * deleted
   */
  data?: string;
  /**
   * @example
   * 3970ACB5-3E30-4A3A-B63A-1790FCC261F4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: KillSparkJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KillSparkJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobRequest extends $tea.Model {
  /**
   * @example
   * {   "createTime":"2020-12-28 09:00:00",   "jobName":"SparkPi" }
   */
  condition?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MySparkCluster
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pageNumber: 'number',
      pageSize: 'number',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobShrinkRequest extends $tea.Model {
  /**
   * @example
   * {   "createTime":"2020-12-28 09:00:00",   "jobName":"SparkPi" }
   */
  conditionShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MySparkCluster
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      conditionShrink: 'Condition',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobResponseBody extends $tea.Model {
  dataResult?: ListSparkJobResponseBodyDataResult;
  /**
   * @example
   * E18B0634-F003-486A-90B9-4AA6932DA3AA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataResult: 'DataResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataResult: ListSparkJobResponseBodyDataResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSparkJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSparkJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobAttemptRequest extends $tea.Model {
  /**
   * @example
   * {"status":"success", "createTime":"2021-05-27 11:00:00", "timeZone":"Asia/Shanghai"}
   */
  condition?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202105272322hangzhou5d64f1560000128
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * release-test
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobAttemptShrinkRequest extends $tea.Model {
  /**
   * @example
   * {"status":"success", "createTime":"2021-05-27 11:00:00", "timeZone":"Asia/Shanghai"}
   */
  conditionShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202105272322hangzhou5d64f1560000128
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * release-test
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      conditionShrink: 'Condition',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionShrink: 'string',
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobAttemptResponseBody extends $tea.Model {
  dataResult?: ListSparkJobAttemptResponseBodyDataResult;
  /**
   * @example
   * 4A839055-70C7-423D-A6F2-E714EA4502DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataResult: 'DataResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataResult: ListSparkJobAttemptResponseBodyDataResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobAttemptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSparkJobAttemptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSparkJobAttemptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkStatementsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * j202106071620hangzhou00000000001
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkStatementsResponseBody extends $tea.Model {
  /**
   * @example
   * C2AB7692-B9EF-4A50-BCFF-0DC5B6F080E8
   */
  requestId?: string;
  statements?: ListSparkStatementsResponseBodyStatements[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statements: 'Statements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statements: { 'type': 'array', 'itemType': ListSparkStatementsResponseBodyStatements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkStatementsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSparkStatementsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSparkStatementsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dla-3qntmdtbqklsbsmceu****
   */
  instanceId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * 600
   */
  errorCode?: string;
  /**
   * @example
   * An internal error occurred
   */
  errorInfo?: string;
  /**
   * @example
   * 312F48C7-AFA0-46AA-B8F6-1B16B8808045
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {     "name": "SparkPi",     "file": "local:///tmp/spark-examples.jar",     "className": "org.apache.spark.examples.SparkPi",     "args": [         "100"     ],     "conf": {         "spark.driver.resourceSpec": "medium",         "spark.executor.instances": 5,         "spark.executor.resourceSpec": "medium"     } }
   */
  configJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyCluster
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      configJson: 'ConfigJson',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configJson: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkJobResponseBody extends $tea.Model {
  /**
   * @example
   * j202011032013hangzhouf742a4330003679
   */
  jobId?: string;
  /**
   * @example
   * C039FD4D-2F3C-4556-AF09-864D3A6485B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSparkJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitSparkJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkSQLRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * set spark.driver.resourceSpec=medium;set spark.executor.instances=5;  set spark.executor.resourceSpec=medium;  set spark.app.name=sparksqltest;  show databases;
   */
  sql?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MySparkCluster
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      sql: 'Sql',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sql: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkSQLResponseBody extends $tea.Model {
  /**
   * @example
   * j202104261729hangzhou224ee5230000930
   */
  jobId?: string;
  /**
   * @example
   * B570310A-8A49-461B-B81D-AE0B58D63DA4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkSQLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSparkSQLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitSparkSQLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateVirtualClusterNameRequest extends $tea.Model {
  /**
   * @example
   * abc123
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateVirtualClusterNameResponseBody extends $tea.Model {
  data?: ValidateVirtualClusterNameResponseBodyData;
  /**
   * @example
   * C039FD4D-2F3C-4556-AF09-864D3A6485B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ValidateVirtualClusterNameResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateVirtualClusterNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateVirtualClusterNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ValidateVirtualClusterNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponseBodyJobDetail extends $tea.Model {
  /**
   * @example
   * 2020-10-27 16:23:16
   */
  createTime?: string;
  /**
   * @example
   * 1603786996000
   */
  createTimeValue?: string;
  /**
   * @example
   * {\\"args\\":[\\"100\\"],\\"name\\":\\"SparkPi\\",\\"className\\":\\"org.apache.spark.examples.SparkPi\\",\\"conf\\":{\\"spark.driver.resourceSpec\\":\\"medium\\",\\"spark.executor.instances\\":5,\\"spark.executor.resourceSpec\\":\\"medium\\"},\\"file\\":\\"local:///tmp/spark-examples.jar\\"}
   */
  detail?: string;
  /**
   * @example
   * small
   */
  driverResourceSpec?: string;
  /**
   * @example
   * 1
   */
  executorInstances?: string;
  /**
   * @example
   * small
   */
  executorResourceSpec?: string;
  /**
   * @example
   * j202010271622hangzhouf742a4330000923
   */
  jobId?: string;
  /**
   * @example
   * SparkPi
   */
  jobName?: string;
  /**
   * @example
   * 202105251618hzslot9906b0b40000005-0001
   */
  lastJobAttemptId?: string;
  /**
   * @example
   * https://dlaui-cn-hangzhou.aliyuncs.com/?token=xxx
   */
  sparkUI?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * 2020-10-27 16:23:16
   */
  submitTime?: string;
  /**
   * @example
   * 1603786996000
   */
  submitTimeValue?: string;
  /**
   * @example
   * 2020-10-27 16:23:16
   */
  updateTime?: string;
  /**
   * @example
   * 1603786996000
   */
  updateTimeValue?: string;
  /**
   * @example
   * MyCluster
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimeValue: 'CreateTimeValue',
      detail: 'Detail',
      driverResourceSpec: 'DriverResourceSpec',
      executorInstances: 'ExecutorInstances',
      executorResourceSpec: 'ExecutorResourceSpec',
      jobId: 'JobId',
      jobName: 'JobName',
      lastJobAttemptId: 'LastJobAttemptId',
      sparkUI: 'SparkUI',
      status: 'Status',
      submitTime: 'SubmitTime',
      submitTimeValue: 'SubmitTimeValue',
      updateTime: 'UpdateTime',
      updateTimeValue: 'UpdateTimeValue',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimeValue: 'string',
      detail: 'string',
      driverResourceSpec: 'string',
      executorInstances: 'string',
      executorResourceSpec: 'string',
      jobId: 'string',
      jobName: 'string',
      lastJobAttemptId: 'string',
      sparkUI: 'string',
      status: 'string',
      submitTime: 'string',
      submitTimeValue: 'string',
      updateTime: 'string',
      updateTimeValue: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkStatementResponseBodyData extends $tea.Model {
  /**
   * @example
   * print(2+2)
   */
  code?: string;
  /**
   * @example
   * 1623033200754
   */
  completedTime?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * "{\\"status\\":\\"ok\\",\\"execution_count\\":1,\\"data\\":{\\"text/plain\\":\\"4\\"}}"
   */
  output?: string;
  /**
   * @example
   * 0.5
   */
  process?: number;
  /**
   * @example
   * 1623033200750
   */
  startedTime?: number;
  /**
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completedTime: 'CompletedTime',
      id: 'Id',
      output: 'Output',
      process: 'Process',
      startedTime: 'StartedTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedTime: 'number',
      id: 'number',
      output: 'string',
      process: 'number',
      startedTime: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobResponseBodyDataResultJobList extends $tea.Model {
  /**
   * @example
   * 2020-10-27 17:51:05
   */
  createTime?: string;
  /**
   * @example
   * 1603792267000
   */
  createTimeValue?: string;
  /**
   * @example
   * {"args":["100"],"name":...}
   */
  detail?: string;
  /**
   * @example
   * small
   */
  driverResourceSpec?: string;
  /**
   * @example
   * 100
   */
  executorInstances?: string;
  /**
   * @example
   * small
   */
  executorResourceSpec?: string;
  /**
   * @example
   * j202010271750hangzhouf742a4330000950
   */
  jobId?: string;
  /**
   * @example
   * SparkPi
   */
  jobName?: string;
  /**
   * @example
   * https://dlaui-cn-hangzhou.aliyuncs.com/?token=xxx
   */
  sparkUI?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * 2020-10-27 17:51:05
   */
  submitTime?: string;
  /**
   * @example
   * 1603792267000
   */
  submitTimeValue?: string;
  /**
   * @example
   * 2020-10-27 17:51:05
   */
  updateTime?: string;
  /**
   * @example
   * 1603792267000
   */
  updateTimeValue?: string;
  /**
   * @example
   * MyCluster
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimeValue: 'CreateTimeValue',
      detail: 'Detail',
      driverResourceSpec: 'DriverResourceSpec',
      executorInstances: 'ExecutorInstances',
      executorResourceSpec: 'ExecutorResourceSpec',
      jobId: 'JobId',
      jobName: 'JobName',
      sparkUI: 'SparkUI',
      status: 'Status',
      submitTime: 'SubmitTime',
      submitTimeValue: 'SubmitTimeValue',
      updateTime: 'UpdateTime',
      updateTimeValue: 'UpdateTimeValue',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimeValue: 'string',
      detail: 'string',
      driverResourceSpec: 'string',
      executorInstances: 'string',
      executorResourceSpec: 'string',
      jobId: 'string',
      jobName: 'string',
      sparkUI: 'string',
      status: 'string',
      submitTime: 'string',
      submitTimeValue: 'string',
      updateTime: 'string',
      updateTimeValue: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobResponseBodyDataResult extends $tea.Model {
  jobList?: ListSparkJobResponseBodyDataResultJobList[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 4998
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': ListSparkJobResponseBodyDataResultJobList },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobAttemptResponseBodyDataResultJobAttemptList extends $tea.Model {
  /**
   * @example
   * 2021-05-27 23:22:08
   */
  createTime?: string;
  /**
   * @example
   * 1622128928000
   */
  createTimeValue?: string;
  /**
   * @example
   * {"xxx":"xxx"}
   */
  detail?: string;
  /**
   * @example
   * 00:01:12
   */
  durationTime?: string;
  /**
   * @example
   * 72000
   */
  durationTimeValue?: string;
  /**
   * @example
   * j202105272322hangzhou5d64f1560000128-0001
   */
  jobAttemptId?: string;
  /**
   * @example
   * j202105272322hangzhou5d64f1560000128
   */
  jobId?: string;
  /**
   * @example
   * xxx
   */
  jobName?: string;
  /**
   * @example
   * xxx
   */
  sparkUI?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * 2021-05-27 23:23:20
   */
  terminatedTime?: string;
  /**
   * @example
   * 1622129000000
   */
  terminatedTimeValue?: string;
  /**
   * @example
   * release-test
   */
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimeValue: 'CreateTimeValue',
      detail: 'Detail',
      durationTime: 'DurationTime',
      durationTimeValue: 'DurationTimeValue',
      jobAttemptId: 'JobAttemptId',
      jobId: 'JobId',
      jobName: 'JobName',
      sparkUI: 'SparkUI',
      status: 'Status',
      terminatedTime: 'TerminatedTime',
      terminatedTimeValue: 'TerminatedTimeValue',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimeValue: 'string',
      detail: 'string',
      durationTime: 'string',
      durationTimeValue: 'string',
      jobAttemptId: 'string',
      jobId: 'string',
      jobName: 'string',
      sparkUI: 'string',
      status: 'string',
      terminatedTime: 'string',
      terminatedTimeValue: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobAttemptResponseBodyDataResult extends $tea.Model {
  jobAttemptList?: ListSparkJobAttemptResponseBodyDataResultJobAttemptList[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      jobAttemptList: 'JobAttemptList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobAttemptList: { 'type': 'array', 'itemType': ListSparkJobAttemptResponseBodyDataResultJobAttemptList },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkStatementsResponseBodyStatements extends $tea.Model {
  /**
   * @example
   * print(2 + 2)
   */
  code?: string;
  /**
   * @example
   * 1623033200754
   */
  completedTime?: number;
  /**
   * @example
   * 2
   */
  id?: number;
  /**
   * @example
   * {\\"status\\":\\"ok\\",\\"execution_count\\":1,\\"data\\":{\\"text/plain\\":\\"4\\"}}
   */
  output?: string;
  /**
   * @example
   * 1
   */
  progress?: number;
  /**
   * @example
   * 1623033200750
   */
  startedTime?: number;
  /**
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completedTime: 'CompletedTime',
      id: 'Id',
      output: 'Output',
      progress: 'Progress',
      startedTime: 'StartedTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedTime: 'number',
      id: 'number',
      output: 'string',
      progress: 'number',
      startedTime: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateVirtualClusterNameResponseBodyData extends $tea.Model {
  /**
   * @example
   * true
   */
  legal?: string;
  /**
   * @example
   * null
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      legal: 'Legal',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      legal: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'cn-beijing': "openanalytics.cn-beijing.aliyuncs.com",
      'cn-zhangjiakou': "openanalytics.cn-zhangjiakou.aliyuncs.com",
      'cn-hangzhou': "openanalytics.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "openanalytics.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "openanalytics.cn-shenzhen.aliyuncs.com",
      'cn-hongkong': "openanalytics.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "openanalytics.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "datalakeanalytics.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "openanalytics.ap-southeast-3.aliyuncs.com",
      'ap-northeast-1': "datalakeanalytics.ap-northeast-1.aliyuncs.com",
      'eu-west-1': "openanalytics.eu-west-1.aliyuncs.com",
      'us-west-1': "openanalytics.us-west-1.aliyuncs.com",
      'us-east-1': "datalakeanalytics.us-east-1.aliyuncs.com",
      'eu-central-1': "datalakeanalytics.eu-central-1.aliyuncs.com",
      'ap-south-1': "openanalytics.ap-south-1.aliyuncs.com",
      'ap-northeast-2-pop': "openanalytics.ap-northeast-1.aliyuncs.com",
      'ap-southeast-5': "openanalytics.ap-southeast-5.aliyuncs.com",
      'cn-beijing-finance-1': "openanalytics.aliyuncs.com",
      'cn-beijing-finance-pop': "openanalytics.aliyuncs.com",
      'cn-beijing-gov-1': "openanalytics.aliyuncs.com",
      'cn-beijing-nu16-b01': "openanalytics.aliyuncs.com",
      'cn-chengdu': "openanalytics.aliyuncs.com",
      'cn-edge-1': "openanalytics.aliyuncs.com",
      'cn-fujian': "openanalytics.aliyuncs.com",
      'cn-haidian-cm12-c01': "openanalytics.aliyuncs.com",
      'cn-hangzhou-bj-b01': "openanalytics.aliyuncs.com",
      'cn-hangzhou-finance': "openanalytics.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "openanalytics.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "openanalytics.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "openanalytics.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "openanalytics.aliyuncs.com",
      'cn-hangzhou-test-306': "openanalytics.aliyuncs.com",
      'cn-hongkong-finance-pop': "openanalytics.aliyuncs.com",
      'cn-huhehaote': "openanalytics.cn-huhehaote.aliyuncs.com",
      'cn-north-2-gov-1': "openanalytics.aliyuncs.com",
      'cn-qingdao': "openanalytics.cn-qingdao.aliyuncs.com",
      'cn-qingdao-nebula': "openanalytics.aliyuncs.com",
      'cn-shanghai-et15-b01': "openanalytics.aliyuncs.com",
      'cn-shanghai-et2-b01': "openanalytics.aliyuncs.com",
      'cn-shanghai-finance-1': "openanalytics.aliyuncs.com",
      'cn-shanghai-inner': "openanalytics.aliyuncs.com",
      'cn-shanghai-internal-test-1': "openanalytics.aliyuncs.com",
      'cn-shenzhen-finance-1': "openanalytics.aliyuncs.com",
      'cn-shenzhen-inner': "openanalytics.aliyuncs.com",
      'cn-shenzhen-st4-d01': "openanalytics.aliyuncs.com",
      'cn-shenzhen-su18-b01': "openanalytics.aliyuncs.com",
      'cn-wuhan': "openanalytics.aliyuncs.com",
      'cn-yushanfang': "openanalytics.aliyuncs.com",
      'cn-zhangbei-na61-b01': "openanalytics.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "openanalytics.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "openanalytics.aliyuncs.com",
      'eu-west-1-oxs': "openanalytics.ap-northeast-1.aliyuncs.com",
      'me-east-1': "openanalytics.me-east-1.aliyuncs.com",
      'rus-west-1-pop': "openanalytics.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("openanalytics-open", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - CancelSparkStatementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSparkStatementResponse
   */
  async cancelSparkStatementWithOptions(request: CancelSparkStatementRequest, runtime: $Util.RuntimeOptions): Promise<CancelSparkStatementResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.statementId)) {
      body["StatementId"] = request.statementId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelSparkStatement",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelSparkStatementResponse>(await this.callApi(params, req, runtime), new CancelSparkStatementResponse({}));
  }

  /**
   * @param request - CancelSparkStatementRequest
   * @returns CancelSparkStatementResponse
   */
  async cancelSparkStatement(request: CancelSparkStatementRequest): Promise<CancelSparkStatementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelSparkStatementWithOptions(request, runtime);
  }

  /**
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.component)) {
      body["Component"] = request.component;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - ExecuteSparkStatementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSparkStatementResponse
   */
  async executeSparkStatementWithOptions(request: ExecuteSparkStatementRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteSparkStatementResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["Code"] = request.code;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.kind)) {
      body["Kind"] = request.kind;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteSparkStatement",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteSparkStatementResponse>(await this.callApi(params, req, runtime), new ExecuteSparkStatementResponse({}));
  }

  /**
   * @param request - ExecuteSparkStatementRequest
   * @returns ExecuteSparkStatementResponse
   */
  async executeSparkStatement(request: ExecuteSparkStatementRequest): Promise<ExecuteSparkStatementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeSparkStatementWithOptions(request, runtime);
  }

  /**
   * @param request - GetJobAttemptLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobAttemptLogResponse
   */
  async getJobAttemptLogWithOptions(request: GetJobAttemptLogRequest, runtime: $Util.RuntimeOptions): Promise<GetJobAttemptLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobAttemptId)) {
      body["JobAttemptId"] = request.jobAttemptId;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.vcName)) {
      body["VcName"] = request.vcName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetJobAttemptLog",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobAttemptLogResponse>(await this.callApi(params, req, runtime), new GetJobAttemptLogResponse({}));
  }

  /**
   * @param request - GetJobAttemptLogRequest
   * @returns GetJobAttemptLogResponse
   */
  async getJobAttemptLog(request: GetJobAttemptLogRequest): Promise<GetJobAttemptLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobAttemptLogWithOptions(request, runtime);
  }

  /**
   * @param request - GetJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobDetailResponse
   */
  async getJobDetailWithOptions(request: GetJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetJobDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.vcName)) {
      body["VcName"] = request.vcName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetJobDetail",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobDetailResponse>(await this.callApi(params, req, runtime), new GetJobDetailResponse({}));
  }

  /**
   * @param request - GetJobDetailRequest
   * @returns GetJobDetailResponse
   */
  async getJobDetail(request: GetJobDetailRequest): Promise<GetJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobDetailWithOptions(request, runtime);
  }

  /**
   * @param request - GetJobLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobLogResponse
   */
  async getJobLogWithOptions(request: GetJobLogRequest, runtime: $Util.RuntimeOptions): Promise<GetJobLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.vcName)) {
      body["VcName"] = request.vcName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetJobLog",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobLogResponse>(await this.callApi(params, req, runtime), new GetJobLogResponse({}));
  }

  /**
   * @param request - GetJobLogRequest
   * @returns GetJobLogResponse
   */
  async getJobLog(request: GetJobLogRequest): Promise<GetJobLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobLogWithOptions(request, runtime);
  }

  /**
   * @param request - GetJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobStatusResponse
   */
  async getJobStatusWithOptions(request: GetJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetJobStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.vcName)) {
      body["VcName"] = request.vcName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetJobStatus",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobStatusResponse>(await this.callApi(params, req, runtime), new GetJobStatusResponse({}));
  }

  /**
   * @param request - GetJobStatusRequest
   * @returns GetJobStatusResponse
   */
  async getJobStatus(request: GetJobStatusRequest): Promise<GetJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobStatusWithOptions(request, runtime);
  }

  /**
   * @param request - GetSparkSessionStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkSessionStateResponse
   */
  async getSparkSessionStateWithOptions(request: GetSparkSessionStateRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkSessionStateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkSessionState",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkSessionStateResponse>(await this.callApi(params, req, runtime), new GetSparkSessionStateResponse({}));
  }

  /**
   * @param request - GetSparkSessionStateRequest
   * @returns GetSparkSessionStateResponse
   */
  async getSparkSessionState(request: GetSparkSessionStateRequest): Promise<GetSparkSessionStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkSessionStateWithOptions(request, runtime);
  }

  /**
   * @param request - GetSparkStatementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkStatementResponse
   */
  async getSparkStatementWithOptions(request: GetSparkStatementRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkStatementResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.statementId)) {
      body["StatementId"] = request.statementId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkStatement",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkStatementResponse>(await this.callApi(params, req, runtime), new GetSparkStatementResponse({}));
  }

  /**
   * @param request - GetSparkStatementRequest
   * @returns GetSparkStatementResponse
   */
  async getSparkStatement(request: GetSparkStatementRequest): Promise<GetSparkStatementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkStatementWithOptions(request, runtime);
  }

  /**
   * @param request - KillSparkJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillSparkJobResponse
   */
  async killSparkJobWithOptions(request: KillSparkJobRequest, runtime: $Util.RuntimeOptions): Promise<KillSparkJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.vcName)) {
      body["VcName"] = request.vcName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "KillSparkJob",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillSparkJobResponse>(await this.callApi(params, req, runtime), new KillSparkJobResponse({}));
  }

  /**
   * @param request - KillSparkJobRequest
   * @returns KillSparkJobResponse
   */
  async killSparkJob(request: KillSparkJobRequest): Promise<KillSparkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killSparkJobWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - ListSparkJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkJobResponse
   */
  async listSparkJobWithOptions(tmpReq: ListSparkJobRequest, runtime: $Util.RuntimeOptions): Promise<ListSparkJobResponse> {
    Util.validateModel(tmpReq);
    let request = new ListSparkJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = { };
    if (!Util.isUnset(request.conditionShrink)) {
      query["Condition"] = request.conditionShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.vcName)) {
      query["VcName"] = request.vcName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSparkJob",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSparkJobResponse>(await this.callApi(params, req, runtime), new ListSparkJobResponse({}));
  }

  /**
   * @param request - ListSparkJobRequest
   * @returns ListSparkJobResponse
   */
  async listSparkJob(request: ListSparkJobRequest): Promise<ListSparkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkJobWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - ListSparkJobAttemptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkJobAttemptResponse
   */
  async listSparkJobAttemptWithOptions(tmpReq: ListSparkJobAttemptRequest, runtime: $Util.RuntimeOptions): Promise<ListSparkJobAttemptResponse> {
    Util.validateModel(tmpReq);
    let request = new ListSparkJobAttemptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = { };
    if (!Util.isUnset(request.conditionShrink)) {
      query["Condition"] = request.conditionShrink;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.vcName)) {
      query["VcName"] = request.vcName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSparkJobAttempt",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSparkJobAttemptResponse>(await this.callApi(params, req, runtime), new ListSparkJobAttemptResponse({}));
  }

  /**
   * @param request - ListSparkJobAttemptRequest
   * @returns ListSparkJobAttemptResponse
   */
  async listSparkJobAttempt(request: ListSparkJobAttemptRequest): Promise<ListSparkJobAttemptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkJobAttemptWithOptions(request, runtime);
  }

  /**
   * @param request - ListSparkStatementsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkStatementsResponse
   */
  async listSparkStatementsWithOptions(request: ListSparkStatementsRequest, runtime: $Util.RuntimeOptions): Promise<ListSparkStatementsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSparkStatements",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSparkStatementsResponse>(await this.callApi(params, req, runtime), new ListSparkStatementsResponse({}));
  }

  /**
   * @param request - ListSparkStatementsRequest
   * @returns ListSparkStatementsResponse
   */
  async listSparkStatements(request: ListSparkStatementsRequest): Promise<ListSparkStatementsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkStatementsWithOptions(request, runtime);
  }

  /**
   * @param request - ReleaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstance",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceResponse({}));
  }

  /**
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitSparkJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSparkJobResponse
   */
  async submitSparkJobWithOptions(request: SubmitSparkJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSparkJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configJson)) {
      body["ConfigJson"] = request.configJson;
    }

    if (!Util.isUnset(request.vcName)) {
      body["VcName"] = request.vcName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSparkJob",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSparkJobResponse>(await this.callApi(params, req, runtime), new SubmitSparkJobResponse({}));
  }

  /**
   * @param request - SubmitSparkJobRequest
   * @returns SubmitSparkJobResponse
   */
  async submitSparkJob(request: SubmitSparkJobRequest): Promise<SubmitSparkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSparkJobWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitSparkSQLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSparkSQLResponse
   */
  async submitSparkSQLWithOptions(request: SubmitSparkSQLRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSparkSQLResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sql)) {
      body["Sql"] = request.sql;
    }

    if (!Util.isUnset(request.vcName)) {
      body["VcName"] = request.vcName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSparkSQL",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSparkSQLResponse>(await this.callApi(params, req, runtime), new SubmitSparkSQLResponse({}));
  }

  /**
   * @param request - SubmitSparkSQLRequest
   * @returns SubmitSparkSQLResponse
   */
  async submitSparkSQL(request: SubmitSparkSQLRequest): Promise<SubmitSparkSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSparkSQLWithOptions(request, runtime);
  }

  /**
   * @param request - ValidateVirtualClusterNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateVirtualClusterNameResponse
   */
  async validateVirtualClusterNameWithOptions(request: ValidateVirtualClusterNameRequest, runtime: $Util.RuntimeOptions): Promise<ValidateVirtualClusterNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.vcName)) {
      body["VcName"] = request.vcName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ValidateVirtualClusterName",
      version: "2018-06-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateVirtualClusterNameResponse>(await this.callApi(params, req, runtime), new ValidateVirtualClusterNameResponse({}));
  }

  /**
   * @param request - ValidateVirtualClusterNameRequest
   * @returns ValidateVirtualClusterNameResponse
   */
  async validateVirtualClusterName(request: ValidateVirtualClusterNameRequest): Promise<ValidateVirtualClusterNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateVirtualClusterNameWithOptions(request, runtime);
  }

}
