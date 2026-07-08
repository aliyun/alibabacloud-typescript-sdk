// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStyleFeatureAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of custom content texts.
   */
  contents?: string[];
  /**
   * @remarks
   * A collection of Material Library IDs.
   */
  materialIds?: number[];
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. Get the [workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

