// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

