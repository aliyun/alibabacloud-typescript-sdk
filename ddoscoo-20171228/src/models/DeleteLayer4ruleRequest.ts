// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLayer4RuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"InstanceId":"0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc","Protocol":"tcp","FrontendPort":80}
   */
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

