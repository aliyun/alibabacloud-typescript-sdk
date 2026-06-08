// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityStrategyShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1AFAE64E-D1BE-432B-A9*****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contentShrink?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13
   */
  id?: number;
  name?: string;
  workspacesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      contentShrink: 'Content',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      workspacesShrink: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      contentShrink: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      workspacesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

