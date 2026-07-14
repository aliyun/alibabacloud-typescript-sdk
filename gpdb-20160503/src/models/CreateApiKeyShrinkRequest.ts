// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyShrinkRequest extends $dara.Model {
  /**
   * @example
   * test secret
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my api key
   */
  keyName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  serviceIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      keyName: 'KeyName',
      regionId: 'RegionId',
      serviceIdsShrink: 'ServiceIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      keyName: 'string',
      regionId: 'string',
      serviceIdsShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

