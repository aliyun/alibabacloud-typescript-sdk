// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 017f39b8-dfa4-4e16-a84b-1dcee4b1****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the instance to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * demo-aaed579c-1f8a-431e-8705-97d18e91c7b4******
   */
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instanceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

