// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationSpecShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 02S7UU41WKJL7ERR
   */
  applicationId?: string;
  instanceSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceSpecShrink: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

