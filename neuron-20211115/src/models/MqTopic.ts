// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MqTopic extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  env?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  messageType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pbcId?: string;
  remark?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'env',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      messageType: 'messageType',
      name: 'name',
      pbcId: 'pbcId',
      remark: 'remark',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      messageType: 'string',
      name: 'string',
      pbcId: 'string',
      remark: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

