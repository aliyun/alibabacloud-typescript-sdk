// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperationModelFileAction extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  action?: string;
  destination?: string;
  source?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      destination: 'destination',
      source: 'source',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      destination: 'string',
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

