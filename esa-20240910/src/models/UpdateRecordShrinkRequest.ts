// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordShrinkRequest extends $dara.Model {
  authConfShrink?: string;
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
   * This parameter is required.
   */
  recordId?: number;
  sourceType?: string;
  ttl?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authConfShrink: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      dataShrink: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordId: 'RecordId',
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
      recordId: 'number',
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

