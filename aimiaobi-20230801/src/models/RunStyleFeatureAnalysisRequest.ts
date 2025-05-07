// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStyleFeatureAnalysisRequest extends $dara.Model {
  contents?: string[];
  materialIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      materialIds: 'MaterialIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': 'string' },
      materialIds: { 'type': 'array', 'itemType': 'number' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    if(Array.isArray(this.materialIds)) {
      $dara.Model.validateArray(this.materialIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

