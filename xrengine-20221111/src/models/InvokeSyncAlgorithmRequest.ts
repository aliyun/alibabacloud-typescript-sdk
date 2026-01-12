// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeSyncAlgorithmRequest extends $dara.Model {
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  params?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      name: 'Name',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      name: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

