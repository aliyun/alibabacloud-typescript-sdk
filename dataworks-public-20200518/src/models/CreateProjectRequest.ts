// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * This parameter is required.
   * 
   * @example
   * value
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

export class CreateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency parameter. This parameter can be left empty.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to disable the development role. Valid values:
   * 
   * - **false** (default): enables the development role.
   * - **true**: disables the development role.
   * 
   * @example
   * false
   */
  disableDevelopment?: boolean;
  /**
   * @remarks
   * Specifies whether to allow downloading query results from the IDE. Valid values:
   * 
   * - **1** (default): allows downloading.
   * - **0**: does not allow downloading.
   * 
   * @example
   * 1
   */
  isAllowDownload?: number;
  /**
   * @remarks
   * The detailed description of the workspace.
   * 
   * @example
   * test_describe
   */
  projectDescription?: string;
  /**
   * @remarks
   * The name of the workspace. The name can contain only letters, digits, and underscores (_), and must start with a letter or digit.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The mode of the workspace. For more information about the differences between modes, see [Must-read: Differences between simple mode and standard mode](https://help.aliyun.com/document_detail/85772.html).
   * 
   * Valid values:
   * 
   * - **2** (default): simple workspace mode.
   * - **3**: standard workspace mode.
   * 
   * @example
   * 3
   */
  projectMode?: number;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzbn7pti3****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The list of tags bound to the workspace.
   */
  tags?: CreateProjectRequestTags[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      disableDevelopment: 'DisableDevelopment',
      isAllowDownload: 'IsAllowDownload',
      projectDescription: 'ProjectDescription',
      projectIdentifier: 'ProjectIdentifier',
      projectMode: 'ProjectMode',
      projectName: 'ProjectName',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      disableDevelopment: 'boolean',
      isAllowDownload: 'number',
      projectDescription: 'string',
      projectIdentifier: 'string',
      projectMode: 'number',
      projectName: 'string',
      resourceManagerResourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateProjectRequestTags },
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

