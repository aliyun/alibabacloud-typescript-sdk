// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecordShrinkRequest extends $dara.Model {
  authConfShrink?: string;
  /**
   * @remarks
   * 业务场景
   */
  bizName?: string;
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dataShrink?: string;
  hostPolicy?: string;
  /**
   * @remarks
   * 是否代理加速
   */
  proxied?: boolean;
  /**
   * @remarks
   * 记录名称
   * 
   * This parameter is required.
   */
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ttl?: number;
  /**
   * @remarks
   * 记录类型
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authConfShrink: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      dataShrink: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordName: 'RecordName',
      siteId: 'SiteId',
      sourceType: 'SourceType',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfShrink: 'string',
      bizName: 'string',
      comment: 'string',
      dataShrink: 'string',
      hostPolicy: 'string',
      proxied: 'boolean',
      recordName: 'string',
      siteId: 'number',
      sourceType: 'string',
      ttl: 'number',
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

