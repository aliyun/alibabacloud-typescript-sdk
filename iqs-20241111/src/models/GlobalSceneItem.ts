// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalSceneItem extends $dara.Model {
  /**
   * @remarks
   * The detailed information in JSON format.
   * 
   * @example
   * {
   * "snippet": "截至2025年3月7日，SpaceX星舰已经发射了8次，并取得4次成功及4次失败。",
   * "snippetHighlighted": ["8次"],
   * "title": "星舰发射任务列表"
   * }
   */
  detail?: string;
  /**
   * @remarks
   * The type of the vertical data.
   * 
   * @example
   * answerBox
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

