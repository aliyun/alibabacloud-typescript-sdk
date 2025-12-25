// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishHotspotRequest extends $dara.Model {
  paramTag?: string;
  /**
   * @example
   * 2345****
   */
  subSceneUuid?: string;
  static names(): { [key: string]: string } {
    return {
      paramTag: 'ParamTag',
      subSceneUuid: 'SubSceneUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramTag: 'string',
      subSceneUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

