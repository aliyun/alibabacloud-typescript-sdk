// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentResourceDetail } from "./IncidentResourceDetail";


export class IncidentResourceStruct extends $dara.Model {
  /**
   * @remarks
   * 描述信息。
   * 
   * @example
   * 生产环境 Web 服务器
   */
  description?: string;
  /**
   * @remarks
   * 事件ID。
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * 事件中该资源的唯一 ID。
   * 
   * @example
   * res-001
   */
  incidentResourceId?: string;
  /**
   * @remarks
   * 事件资源详情对象。
   */
  resource?: IncidentResourceDetail;
  /**
   * @remarks
   * 来源。
   * 
   * @example
   * cloudmonitor
   */
  source?: string;
  /**
   * @remarks
   * 时间戳
   * 
   * @example
   * 1741234567890
   */
  time?: number;
  /**
   * @remarks
   * 用户 ID。
   * 
   * @example
   * user-12345
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      incidentId: 'incidentId',
      incidentResourceId: 'incidentResourceId',
      resource: 'resource',
      source: 'source',
      time: 'time',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      incidentId: 'string',
      incidentResourceId: 'string',
      resource: IncidentResourceDetail,
      source: 'string',
      time: 'number',
      userId: 'number',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

