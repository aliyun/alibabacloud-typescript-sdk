// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceResourceRequestResourcesLabels extends $dara.Model {
  /**
   * @remarks
   * The label key.
   * 
   * @example
   * system.support.eas
   */
  key?: string;
  /**
   * @remarks
   * The label value.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

