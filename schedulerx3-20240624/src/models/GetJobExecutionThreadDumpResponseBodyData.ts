// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobExecutionThreadDumpResponseBodyData extends $dara.Model {
  /**
   * @example
   * \\"Thread-7\\" Id=67 TIMED_WAITING\\n\\tat java.base@17.0.5/java.lang.Thread.sleep(Native Method)\\n\\tat app//com.xxl.job.executor.service.jobhandler.SampleXxlJob.shardingJobHandler(SampleXxlJob.java:73)\\n\\tat java.base@17.0.5/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\\n\\tat java.base@17.0.5/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\\n\\tat java.base@17.0.5/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\\n\\tat java.base@17.0.5/java.lang.reflect.Method.invoke(Method.java:568)\\n\\tat app//com.xxl.job.core.handler.impl.MethodJobHandler.execute(MethodJobHandler.java:29)\\n\\tat app//com.xxl.job.core.thread.JobThread.run(JobThread.java:152)\\n
   */
  dump?: string;
  static names(): { [key: string]: string } {
    return {
      dump: 'Dump',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dump: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

