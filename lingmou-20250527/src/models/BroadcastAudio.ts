// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BroadcastAudio extends $dara.Model {
  /**
   * @example
   * 10
   */
  audioLength?: number;
  /**
   * @example
   * 2026-01-22T01:59:03
   */
  createTime?: string;
  errorCode?: string;
  /**
   * @example
   * M1Ju6XhHog_e-lSeb80Slp9g
   */
  id?: string;
  /**
   * @example
   * 2026-01-22T01:59:03
   */
  modifiedTime?: string;
  name?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      audioLength: 'audioLength',
      createTime: 'createTime',
      errorCode: 'errorCode',
      id: 'id',
      modifiedTime: 'modifiedTime',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLength: 'number',
      createTime: 'string',
      errorCode: 'string',
      id: 'string',
      modifiedTime: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

