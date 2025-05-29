// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingProjectsResponseBodyProjectsSessionAttribs extends $dara.Model {
  /**
   * @example
   * Sync
   */
  startMode?: string;
  static names(): { [key: string]: string } {
    return {
      startMode: 'StartMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

