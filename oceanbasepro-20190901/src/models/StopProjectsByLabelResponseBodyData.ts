// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopProjectsByLabelResponseBodyData extends $dara.Model {
  failedProjectIds?: string[];
  succeedProjectIds?: string[];
  /**
   * @example
   * 16
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failedProjectIds: 'FailedProjectIds',
      succeedProjectIds: 'SucceedProjectIds',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedProjectIds: { 'type': 'array', 'itemType': 'string' },
      succeedProjectIds: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedProjectIds)) {
      $dara.Model.validateArray(this.failedProjectIds);
    }
    if(Array.isArray(this.succeedProjectIds)) {
      $dara.Model.validateArray(this.succeedProjectIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

