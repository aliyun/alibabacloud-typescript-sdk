// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPptArtifactRequest extends $dara.Model {
  /**
   * @example
   * abc
   */
  externalUserId?: string;
  /**
   * @example
   * 5232136
   */
  pptArtifactId?: number;
  /**
   * @example
   * llm-az2gglxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      externalUserId: 'ExternalUserId',
      pptArtifactId: 'PptArtifactId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUserId: 'string',
      pptArtifactId: 'number',
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

