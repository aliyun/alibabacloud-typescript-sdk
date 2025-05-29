// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingProjectInstancesResponseBodyRenderingInstancesStateInfo extends $dara.Model {
  comment?: string;
  /**
   * @example
   * InUse
   */
  state?: string;
  /**
   * @example
   * 2024-11-11T18:19:04+08:00
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

