// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class RepoConfigurationArtifactBuildRuleParameters extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  imageIndexOnly?: boolean;
  priorityFile?: string;
  static names(): { [key: string]: string } {
    return {
      imageIndexOnly: 'ImageIndexOnly',
      priorityFile: 'PriorityFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIndexOnly: 'boolean',
      priorityFile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

