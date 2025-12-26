// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Toolset extends $dara.Model {
  accessibility?: string;
  creator?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  tools?: string;
  toolsetConfig?: string;
  toolsetId?: string;
  toolsetName?: string;
  toolsetType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      creator: 'Creator',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      tools: 'Tools',
      toolsetConfig: 'ToolsetConfig',
      toolsetId: 'ToolsetId',
      toolsetName: 'ToolsetName',
      toolsetType: 'ToolsetType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      creator: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      tools: 'string',
      toolsetConfig: 'string',
      toolsetId: 'string',
      toolsetName: 'string',
      toolsetType: 'string',
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

