// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobEventsResponseBodyPagingInfoDIJobEvent extends $dara.Model {
  /**
   * @remarks
   * The processing result of the DDL event. Valid values: Critical, Ignore, Normal, and Warning.
   * 
   * @example
   * Ignore
   */
  action?: string;
  /**
   * @remarks
   * The alert notification method. Valid values: Phone, Mail, Sms, Ding, and Webhook.
   * 
   * @example
   * Phone
   */
  channels?: string;
  /**
   * @remarks
   * The time when the event was created.
   * 
   * @example
   * 1663573162
   */
  createTime?: string;
  /**
   * @remarks
   * The alert details.
   * 
   * @example
   * aggregator:avg [**] for 5 minutes, service maybe abnormal
   */
  detail?: string;
  /**
   * @remarks
   * The DDL statement of the destination table.
   * 
   * @example
   * alter table table2 ***
   */
  dstSql?: string;
  /**
   * @remarks
   * The name of the destination table.
   * 
   * @example
   * table2
   */
  dstTable?: string;
  /**
   * @remarks
   * The error logs for failovers.
   * 
   * @example
   * 2024-05-29 15:11:31,377 [main] INFO com.*.**.di.core.metrics.:21 []  {****} 
   * 2024-05-29 15:11:31,384 [main] INFO *.aliyun.*.di.*.*.metrics.*:27 [] - Open MarioDiReporter 
   * 2024-05-29 15:11:33,248 [flink-akka.*.*-dispatcher-17] INFO
   */
  failoverMessage?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The severity level of the alert. Valid values: Warning and Critical.
   * 
   * @example
   * Warning
   */
  severity?: string;
  /**
   * @remarks
   * The DDL statement of the source table.
   * 
   * @example
   * alter table table1 ***
   */
  srcSql?: string;
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * table1
   */
  srcTable?: string;
  /**
   * @remarks
   * The sending status of an alert notification. Valid values: Success, Fail, and Silence.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The type of the alert event.
   * 
   * *   Heartbeat
   * *   Delay
   * *   FailoverCount
   * *   DdlReport
   * *   ResourceUtilization
   * 
   * @example
   * Delay
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      channels: 'Channels',
      createTime: 'CreateTime',
      detail: 'Detail',
      dstSql: 'DstSql',
      dstTable: 'DstTable',
      failoverMessage: 'FailoverMessage',
      id: 'Id',
      severity: 'Severity',
      srcSql: 'SrcSql',
      srcTable: 'SrcTable',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      channels: 'string',
      createTime: 'string',
      detail: 'string',
      dstSql: 'string',
      dstTable: 'string',
      failoverMessage: 'string',
      id: 'string',
      severity: 'string',
      srcSql: 'string',
      srcTable: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

