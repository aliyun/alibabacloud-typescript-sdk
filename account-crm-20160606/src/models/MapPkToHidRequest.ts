// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MapPkToHidRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mappingScenes?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      mappingScenes: 'MappingScenes',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      mappingScenes: 'string',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

