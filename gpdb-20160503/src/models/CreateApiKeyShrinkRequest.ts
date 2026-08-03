// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test secret
   */
  description?: string;
  /**
   * @remarks
   * The name of the API key.
   * 
   * This parameter is required.
   * 
   * @example
   * my api key
   */
  keyName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of service IDs to authorize.
   */
  serviceIdsShrink?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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

