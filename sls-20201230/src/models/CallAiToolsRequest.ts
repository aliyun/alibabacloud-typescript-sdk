// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallAiToolsRequest extends $dara.Model {
  params?: { [key: string]: string };
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
      regionId: 'regionId',
      toolName: 'toolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      toolName: 'string',
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

