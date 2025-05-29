// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRenderingSessionResponseBodyStateInfo extends $dara.Model {
  comment?: string;
  /**
   * @example
   * SessionStarting
   */
  state?: string;
  /**
   * @example
   * 2021-05-06T06:37Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      state: 'State',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      state: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

