// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  data?: any;
  /**
   * @example
   * 2715B4D3-A3FB-5FC7-AFA0-4471687B1EC6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
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

