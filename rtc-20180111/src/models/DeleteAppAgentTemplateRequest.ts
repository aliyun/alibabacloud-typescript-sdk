// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppAgentTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1213123142124124124214
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

