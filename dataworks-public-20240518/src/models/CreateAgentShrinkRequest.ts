// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentShrinkRequest extends $dara.Model {
  callableAgentsShrink?: string;
  description?: string;
  displayName?: string;
  metadataShrink?: string;
  modelShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  skillsShrink?: string;
  systemPrompt?: string;
  toolsShrink?: string;
  /**
   * @example
   * TENANT
   */
  visibility?: string;
  visibilityScopeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      callableAgentsShrink: 'CallableAgents',
      description: 'Description',
      displayName: 'DisplayName',
      metadataShrink: 'Metadata',
      modelShrink: 'Model',
      name: 'Name',
      skillsShrink: 'Skills',
      systemPrompt: 'SystemPrompt',
      toolsShrink: 'Tools',
      visibility: 'Visibility',
      visibilityScopeShrink: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callableAgentsShrink: 'string',
      description: 'string',
      displayName: 'string',
      metadataShrink: 'string',
      modelShrink: 'string',
      name: 'string',
      skillsShrink: 'string',
      systemPrompt: 'string',
      toolsShrink: 'string',
      visibility: 'string',
      visibilityScopeShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

