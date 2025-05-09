// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration item. Valid values:
   * 
   * *   src.offline.datasource.max.connection: indicates the maximum number of connections that are allowed for reading data from the source of a batch synchronization task.
   * *   dst.offline.truncate: indicates whether to clear the destination table before data writing.
   * *   runtime.offline.speed.limit.enable: indicates whether throttling is enabled for a batch synchronization task.
   * *   runtime.offline.concurrent: indicates the maximum number of parallel threads that are allowed for a batch synchronization task.
   * *   runtime.enable.auto.create.schema: indicates whether schemas are automatically created in the destination of a synchronization task.
   * *   runtime.realtime.concurrent: indicates the maximum number of parallel threads that are allowed for a real-time synchronization task.
   * *   runtime.realtime.failover.minute.dataxcdc: indicates the maximum waiting duration before a synchronization task retries the next restart if the previous restart fails after failover occurs. Unit: minutes.
   * *   runtime.realtime.failover.times.dataxcdc: indicates the maximum number of failures that are allowed for restarting a synchronization task after failovers occur.
   * 
   * @example
   * runtime.offline.concurrent
   */
  name?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

