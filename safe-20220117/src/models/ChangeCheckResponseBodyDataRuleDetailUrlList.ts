// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckResponseBodyDataRuleDetailUrlList extends $dara.Model {
  sceneEnum?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      sceneEnum: 'SceneEnum',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneEnum: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

