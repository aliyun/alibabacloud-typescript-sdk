// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  callInfos?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outboundTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      callInfos: 'CallInfos',
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfos: 'string',
      instanceId: 'string',
      outboundTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

