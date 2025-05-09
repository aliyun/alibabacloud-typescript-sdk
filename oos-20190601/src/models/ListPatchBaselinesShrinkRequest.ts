// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPatchBaselinesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatchesShrink?: string;
  /**
   * @remarks
   * Specifies whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   Windows
   * *   Ubuntu
   * *   CentOS
   * *   Debian
   * *   AliyunLinux
   * *   RedhatEnterpriseLinux
   * *   Anolis
   * *   AlmaLinux
   * 
   * @example
   * AliyunLinux
   */
  operationSystem?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      approvedPatchesShrink: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedPatchesShrink: 'string',
      approvedPatchesEnableNonSecurity: 'boolean',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      operationSystem: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

