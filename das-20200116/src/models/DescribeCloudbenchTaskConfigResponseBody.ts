// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudbenchTaskConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The path in which the files are archived.
   * 
   * @example
   * /tmp/das/cloudbench/archive-sqls/
   */
  archiveFolder?: string;
  /**
   * @remarks
   * The command that was run to start the stress testing task.
   * 
   * @example
   * java -jar /tmp/das/cloudbench/CloudBenchClient.jar --bench --rocksdb /tmp/das/cloudbench/rocksdb --meta /tmp/das/cloudbench/cl-1621353601000-360****.meta --task_name 2777bba9-a836-49e6-9f70-1c3822fc9239 --result_file /tmp/das/cloudbench/null.result --user cloudb**** --pwd \\"cloudbench@****\\" --host rm-bp1j5f8s5x26kq79216****.mysql.rds.aliyuncs.com --port 3306 --charset utf8mb4 --interval 1 --bench_time 3600 --rate_factor 1.0 --start_time 1621353601 --rt > /tmp/das/cloudbench/null.log
   */
  benchCmd?: string;
  /**
   * @remarks
   * The path to the JAR file that is used for stress testing.
   * 
   * @example
   * /tmp/das/cloudbench/CloudBenchClient.jar
   */
  clientJarPath?: string;
  /**
   * @remarks
   * The path to the JAR file that is stored in OSS. The JAR file is used for stress testing.
   * 
   * @example
   * https://cloudbench-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/CloudBenchClient.jar?OSSAccessKeyId=LTAI5tKj8B4wikkVtupK****&Expires=1622441372&Signature=28p%2BCe4tNHpr9VPOcHc3Si9iOb****
   */
  jarOnOss?: string;
  /**
   * @remarks
   * The command that was run to preload the file that stores the analysis result of full SQL statistics.
   * 
   * @example
   * java -jar /tmp/das/cloudbench/CloudBenchClient.jar --load --out /tmp/das/cloudbench/cl-1621353601000-360****.sc --meta /tmp/das/cloudbench/cl-1621353601000-360****.meta --task_name 2777bba9-****-49e6-9f70-1c3822fc**** --rocksdb /tmp/das/cloudbench/rocksdb
   */
  loadCmd?: string;
  /**
   * @remarks
   * The name of the metadata file.
   * 
   * @example
   * cl-1621353601000-360****.meta
   */
  metaFileName?: string;
  /**
   * @remarks
   * The name of the metadata file stored in Object Storage Service (OSS).
   * 
   * @example
   * "https://cb-rm-bp1w9g06h560l****.oss-cn-hangzhou.aliyuncs.com/cl-1621353601000-360****.meta?OSSAccessKeyId=LTAI5tKj8B4wikkVtupK****&Expires=1622441372&Signature=Qsehg3tzeA57M%2BIixAbWPWAtvl****
   */
  metaFileOnOss?: string;
  /**
   * @remarks
   * The path to the metadata file.
   * 
   * @example
   * /tmp/das/cloudbench/cl-1621353601000-360****.meta
   */
  metaFilePath?: string;
  /**
   * @remarks
   * The command that was run to parse the file that stores the analysis result of full SQL statistics.
   * 
   * @example
   * cd /tmp/das/cloudbench && java -jar CloudBenchClient.jar --parse --threads 32 --file /tmp/das/cloudbench/2777bba9-a836-49e6-9f70-1c3822fc9239.archiveSql --meta /tmp/das/cloudbench/cl-1621353601000-360****.meta --out /tmp/das/cloudbench/cl-1621353601000-360****.sc --parent_patmp/das/cloudbench --source RDS --h /thost rm-bp1j5f8s5x266****.mysql.rds.aliyuncs.com --port 3306 --user cloudb**** --pwd \\"cloudbench@****\\" --cutSqlLen 8192 --db_black_list=information_schema,test,unknow,null
   */
  parseCmd?: string;
  /**
   * @remarks
   * The path to the file that is parsed. The file stores the analysis result of full SQL statistics.
   * 
   * @example
   * /tmp/das/cloudbench/2777bba9-a836-49e6-9f70-1c3822fc****.archiveSql
   */
  parseFilePath?: string;
  /**
   * @remarks
   * The location where the RocksDB storage system is deployed in the stress testing client.
   * 
   * @example
   * /tmp/das/cloudbench/rocksdb
   */
  rocksDbPath?: string;
  /**
   * @remarks
   * The name of the file that stores the analysis result of full SQL statistics.
   * 
   * @example
   * cl-1621353601000-360****.sc
   */
  sqlFileName?: string;
  /**
   * @remarks
   * The name of the file that stores the analysis result of full SQL statistics and that is stored in OSS.
   * 
   * @example
   * https://cb-rm-bp1w9g06h560l****.oss-cn-hangzhou.aliyuncs.com/cl-1621353601000-360****.sc?OSSAccessKeyId=LTAI5tKj8B4wikkVtupK****&Expires=1622441372&Signature=LYMADwo%2BRrJeqR3e4d8OlIkVmw****
   */
  sqlFileOnOss?: string;
  /**
   * @remarks
   * The path to the file that stores the analysis result of full SQL statistics.
   * 
   * @example
   * /tmp/das/cloudbench/cl-1621353601000-360****.sc
   */
  sqlFilePath?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * e5cec704-0518-430f-8263-76f4dcds****
   */
  taskId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1091411816252****
   */
  userId?: string;
  /**
   * @remarks
   * The path of the temporary directory that is generated for stress testing.
   * 
   * @example
   * /tmp/bench/
   */
  workDir?: string;
  static names(): { [key: string]: string } {
    return {
      archiveFolder: 'ArchiveFolder',
      benchCmd: 'BenchCmd',
      clientJarPath: 'ClientJarPath',
      jarOnOss: 'JarOnOss',
      loadCmd: 'LoadCmd',
      metaFileName: 'MetaFileName',
      metaFileOnOss: 'MetaFileOnOss',
      metaFilePath: 'MetaFilePath',
      parseCmd: 'ParseCmd',
      parseFilePath: 'ParseFilePath',
      rocksDbPath: 'RocksDbPath',
      sqlFileName: 'SqlFileName',
      sqlFileOnOss: 'SqlFileOnOss',
      sqlFilePath: 'SqlFilePath',
      taskId: 'TaskId',
      userId: 'UserId',
      workDir: 'WorkDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveFolder: 'string',
      benchCmd: 'string',
      clientJarPath: 'string',
      jarOnOss: 'string',
      loadCmd: 'string',
      metaFileName: 'string',
      metaFileOnOss: 'string',
      metaFilePath: 'string',
      parseCmd: 'string',
      parseFilePath: 'string',
      rocksDbPath: 'string',
      sqlFileName: 'string',
      sqlFileOnOss: 'string',
      sqlFilePath: 'string',
      taskId: 'string',
      userId: 'string',
      workDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudbenchTaskConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed information, including the error codes and the number of entries that are returned.
   */
  data?: DescribeCloudbenchTaskConfigResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeCloudbenchTaskConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

