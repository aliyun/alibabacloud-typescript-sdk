// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteChangeRequestReleaseStageRequest extends $dara.Model {
  params?: { [key: string]: any };
  /**
   * @example
   * 66c0c9fffeb86b450c199fcd
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      organizationId: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

