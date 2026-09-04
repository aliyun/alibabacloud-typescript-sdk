// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111
   */
  codeBundleId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * full
   */
  kind?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * name
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      codeBundleId: 'codeBundleId',
      kind: 'kind',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeBundleId: 'number',
      kind: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

