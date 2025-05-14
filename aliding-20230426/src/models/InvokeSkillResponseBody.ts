// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 2715B4D3-A3FB-5FC7-AFA0-4471687B1EC6
   */
  requestId?: string;
  /**
   * @example
   * {}
   */
  data?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

