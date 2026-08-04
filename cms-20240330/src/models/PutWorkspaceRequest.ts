// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutWorkspaceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class PutWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * workspace-test
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the resource group specified when the workspace is created.
   * 
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * sls-project-test-001
   */
  slsProject?: string;
  /**
   * @remarks
   * The tags attached to the workspace when it is created.
   */
  tags?: PutWorkspaceRequestTags[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      resourceGroupId: 'resourceGroupId',
      slsProject: 'slsProject',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      resourceGroupId: 'string',
      slsProject: 'string',
      tags: { 'type': 'array', 'itemType': PutWorkspaceRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

