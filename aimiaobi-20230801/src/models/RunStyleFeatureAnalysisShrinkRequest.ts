// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStyleFeatureAnalysisShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of custom content texts.
   */
  contentsShrink?: string;
  /**
   * @remarks
   * A collection of Material Library IDs.
   */
  materialIdsShrink?: string;
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
      contentsShrink: 'Contents',
      materialIdsShrink: 'MaterialIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentsShrink: 'string',
      materialIdsShrink: 'string',
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

