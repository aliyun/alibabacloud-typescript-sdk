// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingSessionResponseBodyStateInfo extends $dara.Model {
  comment?: string;
  /**
   * @example
   * SessionStarted
   */
  state?: string;
  /**
   * @example
   * 2024-10-15T10:05:20+08:00
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

